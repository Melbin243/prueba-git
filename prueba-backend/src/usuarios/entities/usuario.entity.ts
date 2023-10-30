import { Compra } from "src/compras/entities/compra.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
        @PrimaryGeneratedColumn()
        id: number;

        @Column({ type: 'varchar', length: 30, nullable: false})
        nombre: string;

        @Column({ type: 'varchar', length: 40, nullable: false})
        apellido: string;

        @OneToMany(() => Compra, (compra) => compra.usuario)
        compras: Compra[]


}