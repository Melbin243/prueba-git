import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30, nullable: false})
    descripcion: string;

    @Column({ type: 'varchar', length: 40, nullable: false})
    unidad: string;
}
