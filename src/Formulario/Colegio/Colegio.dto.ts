import { ApiProperty } from "@nestjs/swagger"

class ColegioDto {
    @ApiProperty({description: 'id del colegio'})
    id: number

    @ApiProperty({description: 'Nombre del colegio'})
    nombre: string
}

export class obtenerColegiosDto {
    @ApiProperty({description: 'Lista de colegios obtenidos',type: [ColegioDto]})
    colegios: ColegioDto[]
}