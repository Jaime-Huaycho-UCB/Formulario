import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "../Estudiante/Estudiante.entity";

@Entity('colegio')
export class Colegio {
    @PrimaryGeneratedColumn({name: 'id_col'})
    id: number

    @Column({name: 'nombre'})
    nombre: string

    @OneToMany(() => Estudiante,(estudiante) => estudiante.carrera)
    estudiantes: Estudiante[]
}