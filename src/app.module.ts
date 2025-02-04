import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './Formulario/Carrera/Carrera.entity';
import { CarreraModule } from './Formulario/Carrera/Carrera.module';
import { ColegioModule } from './Formulario/Colegio/Colegio.module';
import { Colegio } from './Formulario/Colegio/Colegio.entity';
import { EstudianteModule } from './Formulario/Estudiante/Estudiante.module';
import { Estudiante } from './Formulario/Estudiante/Estudiante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 1987,
      username: 'postgres',
      password: 'z1e2r3o4',
      database: 'DBFormulario',
      entities: [Carrera,Colegio,Estudiante],
      synchronize: false,
      logging: true
    }),
    CarreraModule,
    ColegioModule,
    EstudianteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
