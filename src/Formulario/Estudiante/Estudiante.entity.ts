import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Carrera } from "../Carrera/Carrera.entity";
import { Colegio } from "../Colegio/Colegio.entity";

@Entity('estudiante')
export class Estudiante {
    @PrimaryGeneratedColumn({name: 'id_est'})
    id: number

    @Column({name: 'ci'})
    ci: string

    @Column({name: 'nombres'})
    nombres: string

    @Column({name: 'apellidos'})
    apellidos: string

    @Column({name: 'anio_graduacion'})
    anioGraduacion: number

    @ManyToOne(() => Carrera,(carrera) => carrera.estudiantes)
    @JoinColumn({name: 'id_car'})
    carrera: Carrera

    @ManyToOne(() => Colegio,(colegio) => colegio.estudiantes)
    @JoinColumn({name: 'id_col'})
    colegio: Colegio

    @Column({name: 'creacion',type: 'time without time zone'})
    creacion: Date
}