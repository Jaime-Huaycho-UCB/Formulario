import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Colegio } from "./Colegio.entity";
import { ColegioService } from "./Colegio.service";
import { ColegioController } from "./Colegio.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Colegio])
    ],
    providers: [ColegioService],
    controllers: [ColegioController],
    exports: [ColegioService]
})
export class ColegioModule {}