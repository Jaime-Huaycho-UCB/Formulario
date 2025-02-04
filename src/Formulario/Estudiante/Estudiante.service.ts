import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Estudiante } from "./Estudiante.entity";
import { Repository } from "typeorm";

@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(Estudiante)
        private readonly estudianteRepository: Repository<Estudiante>
    ){}

    async obtenerEstudiantes(ci: string,idCarrera){
        try {
            const estudiantes = await this.estudianteRepository.find({
                where: {
                    ...(ci === null || ci === '' ? {}:{
                        ci: ci
                    }),

                    ...(idCarrera == null ? {}:{
                        carrera: {
                            id: parseInt(idCarrera)
                        }
                    })
                },
                relations: {
                    carrera: true,
                    colegio: true
                }
            })

            return estudiantes;
        } catch (error) {
            return [];
        }
    }

    async obtenerEstudiantePorId(id: number) {
        try {
            const estudiante = await this.estudianteRepository.findOne({
                where: { id },
                relations: { carrera: true, colegio: true }
            });
            return estudiante || null;
        } catch (error) {
            return null;
        }
    }

    async registrarEstudiante(data){
        try {
            const {ci,nombres,apellidos,anioGraduacion,idCarrera,idColegio} = data;
            const estudiante = {
                ci,nombres,apellidos,
                anioGraduacion: anioGraduacion,
                carrera: {
                    id: idCarrera
                },
                colegio: {
                    id: idColegio
                }
            }
            await this.estudianteRepository.save(estudiante);
            return {
                salida: true,
                mensaje: 'Se registro exitosamente al estudiante'
            }
        } catch (error) {
            return {
                salida: false,
                mensaje: 'Hubo un erro en el registro del estudiante'
            }
        }
    }
}