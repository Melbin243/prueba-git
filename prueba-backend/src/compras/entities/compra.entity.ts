import { Producto } from 'src/productos/entities/producto.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'bigint'})
  cantidad: number;

  @Column({type: 'bigint'})
  total: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.compras)
  @JoinColumn({  name: 'id_usuario', referencedColumnName: 'id'})
  usuario: Usuario;

  @ManyToOne(() => Producto, (producto) => producto.compras)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id'})
  producto: Producto;
}
