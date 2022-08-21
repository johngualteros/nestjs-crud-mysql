/* eslint-disable prettier/prettier */
import { FindManyOptions, Repository } from "typeorm";

export abstract class BaseService<T>{
    abstract getRepository() : Repository<T>;

    findAll() : Promise<T[]>{
        return this.getRepository().find();
    }
    findOne(id: number) {
        return this.getRepository().findOneById(id);
    ;
    }
    save(entity: T): Promise<T>{
        return this.getRepository().save(entity);
    }
    saveMany(entities: T[]): Promise<T[]>{
        return this.getRepository().save(entities);
    }
    async delete(id : any){
        return this.getRepository().delete(id);
    }
    count(options?: FindManyOptions<T>) : Promise<number>{
        return this.getRepository().count(options);
    }
}