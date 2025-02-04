import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Carrera } from "./Carrera.entity";
import { Repository } from "typeorm";

@Injectable()
export class CarreraService {
    constructor(
        @InjectRepository(Carrera)
        private readonly carreraRepository: Repository<Carrera>
    ){}
    

    async obtenerCarreras(){
        try {
            const carreras = await this.carreraRepository.find();
            return carreras;
        } catch (error) {
            return [];
        }
    }
}