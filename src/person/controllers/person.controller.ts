/* eslint-disable prettier/prettier */
import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Person } from "../entities/person.entity";
import { PersonService } from "../services/person.service";

@Controller('api/person')
export class PersonController extends BaseController<Person> {

    constructor(private readonly personService: PersonService){
        super();
    }

    getService(): BaseService<Person> {
        return this.personService;
    }

}