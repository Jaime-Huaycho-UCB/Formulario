import { ApiProperty } from "@nestjs/swagger"

class CarreraDto{
    @ApiProperty({description: 'id de la carrera'})
    id: number

    @ApiProperty({description: 'Nombre de la carrera'})
    nombre: string
}

export class obtenerCarrerasDto {
    @ApiProperty({description: 'Lista de carreras',type: [CarreraDto]})
    carreras: CarreraDto[]
}