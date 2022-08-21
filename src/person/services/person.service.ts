/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Person } from "../entities/person.entity";

@Injectable()
export class PersonService extends BaseService<Person>{

    constructor(@InjectRepository(Person) private personRepository: Repository<Person>){
        super();
    }

    getRepository(): Repository<Person> {
        return this.personRepository;
    }
    
}