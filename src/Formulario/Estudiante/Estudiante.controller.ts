import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { EstudianteService } from "./Estudiante.service";
import { Response } from "express";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { obtenerEstudiantesDto, obtenerUnEstudianteDto, registrarEstudianteDto } from "./Estudiante.dto";

@Controller('estudiante')
export class EstudianteController {
    constructor(
        private readonly estudianteService: EstudianteService
    ){}

    @Get('/obtener')
    @ApiOperation({description: 'API para obtener todos lso estudiantes registrados'})
    @ApiResponse({
        status: 200,
        description: 'Estudiantes registrados',
        type: obtenerEstudiantesDto
    })
    async obtenerEstudiantes(
        @Query('ci') ci:string,
        @Query('idCarrera') idCarrera,
        @Res() res: Response
    ){
        const estudiantes = await this.estudianteService.obtenerEstudiantes(ci,(idCarrera === 'null' || idCarrera === null ? null : idCarrera));
        return res.status(200).json({estudiantes});
    }

    @Get('/obtener/:id')
    @ApiOperation({description: 'API para obtener e un estudiante pr su id'})
    @ApiResponse({
        status: 200,
        description: 'Salida de estudiante obtenenido por su id',
        type: obtenerUnEstudianteDto
    })
    async obtenerEstudiantePorId(@Param('id') id: number, @Res() res: Response){
        const estudiante = await this.estudianteService.obtenerEstudiantePorId(id);
        return res.status(200).json({ estudiante });
    }


    @Post('/registrar')
    @ApiResponse({
        status: 200,
        description: 'Salida con mensaje de exito o fracaso al registrar un estudiante',
        type: registrarEstudianteDto
    })
    async registrarestudiante(@Body() data: registrarEstudianteDto,@Res() res: Response){
        const resultado = await this.estudianteService.registrarEstudiante(data);
        return res.status(200).json(resultado);
    }
}