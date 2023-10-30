import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';


@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
  ) {}

  async create(createCompraDto: CreateCompraDto): Promise<Compra> {
    const existeCompra = await this.compraRepository.findOneBy({
      cantidad: createCompraDto.cantidad,
      total: createCompraDto.total,
    });

    if (existeCompra) {
      throw new ConflictException('El compra ya existe');
    }

    return this.compraRepository.save({
      cantidad: createCompraDto.cantidad,
      total: createCompraDto.total,
    });
  }

  async findAll(): Promise<Compra[]> {
    return this.compraRepository.find({relations: ['usuario', 'producto']});
  }

  async findOne(id: number): Promise<Compra> {
    const compra = await this.compraRepository.findOneBy({ id });
    if (!compra) {
      throw new NotFoundException(`No existe el compra ${id}`);
    }
    return compra;
  }

  async update(id: number, updateCompraDto: UpdateCompraDto): Promise<Compra> {
    const compra = await this.compraRepository.findOneBy({ id });
    if (!compra) {
      throw new NotFoundException(`No existe el compra ${id}`);
    }
    const compraUpdate = Object.assign(compra, updateCompraDto);
    return this.compraRepository.save(compraUpdate);
  }

  async remove(id: number) {
    const compra = await this.compraRepository.findOneBy({ id });
    if (!compra) {
      throw new NotFoundException(`No existe el compra ${id}`);
    }
    return this.compraRepository.delete(id);
  }
}
