import { Controller, Get, Res } from "@nestjs/common";
import { CarreraService } from "./Carrera.service";
import { Response } from "express";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { obtenerCarrerasDto } from "./Carrera.dto";

@Controller('carrera')
export class CarreraController {
    constructor(
        private readonly carreraService: CarreraService
    ){}

    @Get('/obtener')
    @ApiOperation({description: 'API para obtener la lista de carreras'})
    @ApiResponse({
        status: 200,
        description: 'Lista de carreras obtenida',
        type: obtenerCarrerasDto
    })
    async obtenerCarreras(@Res() res: Response){
        const carreras = await this.carreraService.obtenerCarreras();
        return res.status(200).json({carreras});
    } 
}