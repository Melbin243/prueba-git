import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
        @PrimaryGeneratedColumn()
        id: number;

        @Column({ type: 'varchar', length: 30, nullable: false})
        nombre: string;

        @Column({ type: 'varchar', length: 40, nullable: false})
        apellido: string;


}