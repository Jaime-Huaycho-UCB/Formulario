import { Controller, Get, Res } from "@nestjs/common";
import { CarreraService } from "./Carrera.service";
import { Response } from "express";

@Controller('carrera')
export class CarreraController {
    constructor(
        private readonly carreraService: CarreraService
    ){}

    @Get('/obtener')
    async obtenerCarreras(@Res() res: Response){
        const carreras = await this.carreraService.obtenerCarreras();
        return res.status(200).json({carreras});
    } 
}