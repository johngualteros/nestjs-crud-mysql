/* eslint-disable prettier/prettier */
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { PersonController } from "./controllers/person.controller";
import { Person } from "./entities/person.entity";
import { PersonService } from "./services/person.service";

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    providers: [PersonService],
    controllers: [PersonController]
})

export class PersonModule{
    
}