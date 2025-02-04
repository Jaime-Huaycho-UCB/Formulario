import { ApiProperty } from "@nestjs/swagger";
class CarreraDto{
    @ApiProperty({description: 'id de la carrera'})
    id: number

    @ApiProperty({description: 'Nombre de la carrera'})
    nombre: string
}

class ColegioDto {
    @ApiProperty({description: 'id del colegio'})
    id: number

    @ApiProperty({description: 'Nombre del colegio'})
    nombre: string
}

class EstudianteDto {
    @ApiProperty({description: 'CI del estudiante'})
    ci: string

    @ApiProperty({description: 'Nombre de estudiante'})
    nombres: string

    @ApiProperty({description: 'Apellidos del estudienta'})
    apellidos: string

    @ApiProperty({description: 'Anio de graduacion de colegio del estudiante'})
    anioGraduacion: number

    @ApiProperty({description: 'Carrera del estudiante',type: CarreraDto})
    carrera: CarreraDto

    @ApiProperty({description: 'Colegio de graduacion del estudiante',type: ColegioDto})
    colegio: ColegioDto

    @ApiProperty({description: 'Fecha de registro de estudiante'})
    creacion: Date
}

export class obtenerEstudiantesDto{
    @ApiProperty({description: 'Estudiantes registrados en el sistema',type: [EstudianteDto]})
    estudiantes: EstudianteDto[]
}
