import { Controller, Get, Res } from "@nestjs/common";
import { ColegioService } from "./Colegio.service";
import { Response } from "express";

@Controller('colegio')
export class ColegioController {
    constructor(
        private readonly colegioService: ColegioService
    ){}

    @Get('/obtener')
    async obtenerColegios(@Res() res: Response){
        const colegios = await this.colegioService.obtenerColegios();
        return res.status(200).json({colegios});
    }
}