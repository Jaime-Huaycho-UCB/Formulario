import { Controller, Get, Res } from "@nestjs/common";
import { ColegioService } from "./Colegio.service";
import { Response } from "express";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { obtenerColegiosDto } from "./Colegio.dto";

@Controller('colegio')
export class ColegioController {
    constructor(
        private readonly colegioService: ColegioService
    ){}

    @Get('/obtener')
    @ApiOperation({description: 'API para obtener los colegios'})
    @ApiResponse({
        status: 200,
        description: 'Colegios obtenidos',
        type: obtenerColegiosDto
    })
    async obtenerColegios(@Res() res: Response){
        const colegios = await this.colegioService.obtenerColegios();
        return res.status(200).json({colegios});
    }
}