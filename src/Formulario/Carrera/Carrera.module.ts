import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Carrera } from "./Carrera.entity";
import { CarreraService } from "./Carrera.service";
import { CarreraController } from "./Carrera.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Carrera])
    ],
    providers: [CarreraService],
    controllers: [CarreraController],
    exports: [CarreraService]
})
export class CarreraModule{}