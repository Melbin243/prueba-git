import { Compra } from "src/compras/entities/compra.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30, nullable: false})
    descripcion: string;

    @Column({ type: 'varchar', length: 40, nullable: false})
    unidad: string;

    @OneToMany(() => Compra, (compra) => compra.producto)
    compras: Compra[]
}
