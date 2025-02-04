import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { EstudianteService } from "./Estudiante.service";
import { Response } from "express";

@Controller('estudiante')
export class EstudianteController {
    constructor(
        private readonly estudianteService: EstudianteService
    ){}

    @Get('/obtener')
    async obtenerEstudiantes(
        @Query('ci') ci:string,
        @Query('idCarrera') idCarrera,
        @Res() res: Response
    ){
        const estudiantes = await this.estudianteService.obtenerEstudiantes(ci,(idCarrera === 'null' || idCarrera === null ? null : idCarrera));
        return res.status(200).json({estudiantes});
    }

    @Post('/registrar')
    async registrarestudiante(@Body() data,@Res() res: Response){
        const resultado = await this.estudianteService.registrarEstudiante(data);
        return res.status(200).json(resultado);
    }
}