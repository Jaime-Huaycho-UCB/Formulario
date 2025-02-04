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

export class registrarEstudianteDto {
    @ApiProperty({description: 'CI del estudiante a registrar',type: String})
    ci: string

    @ApiProperty({description: 'Nombres del estudiante',type: String})
    nombres: string

    @ApiProperty({description: 'Apellidos del estudiante',type: String})
    apellidos: string

    @ApiProperty({description: 'Anio de graducion del coleigo del estudiante',type: Number})
    anioGraduacion: number

    @ApiProperty({description: 'Id de la carrera del estudiante',type: Number})
    idCarrera: number

    @ApiProperty({description: 'Id del colegio que se graduo el estudiante',type: Number})
    idColegio: number
}

export class obtenerEstudiantesDto{
    @ApiProperty({description: 'Estudiantes registrados en el sistema',type: [EstudianteDto]})
    estudiantes: EstudianteDto[]
}

export class obtenerUnEstudianteDto {
    @ApiProperty({description: 'Obtener a un estudiante por su id',type: EstudianteDto})
    estudiante: EstudianteDto
}

export class salidaDto {
    @ApiProperty({description: 'Estado de la salida',type: Boolean})
    salida: boolean

    @ApiProperty({description: 'Mensaje de la salida',type: String})
    mensaje: string
}
