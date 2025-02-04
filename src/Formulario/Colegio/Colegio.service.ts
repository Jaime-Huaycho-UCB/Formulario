import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Colegio } from "./Colegio.entity";
import { Repository } from "typeorm";

@Injectable()
export class ColegioService {
    constructor(
        @InjectRepository(Colegio)
        private readonly colegioRepository: Repository<Colegio>
    ){}

    async obtenerColegios(){
        try {
            const colegios = await this.colegioRepository.find();
            return colegios;
        } catch (error) {
            return [];
        }
    }
}