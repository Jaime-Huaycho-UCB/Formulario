import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Estudiante } from "./Estudiante.entity";
import { EstudianteService } from "./Estudiante.service";
import { EstudianteController } from "./Estudiante.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Estudiante])
    ],
    providers: [EstudianteService],
    controllers: [EstudianteController],
    exports: [EstudianteService]
})
export class EstudianteModule{}