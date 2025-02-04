import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "../Estudiante/Estudiante.entity";

@Entity('carrera')
export class Carrera {
    @PrimaryGeneratedColumn({name: 'id_car'})
    id: number

    @Column({name: 'nombre'})
    nombre: string

    @OneToMany(() => Estudiante,(estudiante) => estudiante.carrera)
    estudiantes: Estudiante[]
}