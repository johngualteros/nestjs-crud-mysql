/* eslint-disable prettier/prettier */

import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { BaseService } from "./service.commons";

export abstract class BaseController<T>{
    abstract getService() : BaseService<T>;

    @Get('all')
    async findAll() : Promise<T[]>{
        return await this.getService().findAll();
    }
    @Get('find/:id')
    async findOne(@Param('id') id : any): Promise<T> {
        return await this.getService().findOne(id);
    }
    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T): Promise<T>{
        return await this.getService().save(entity);
    }

    @Post('save/many')
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T[]): Promise<T[]>{
        return await this.getService().saveMany(entities);
    }

    @Delete('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id : any){
        return await this.getService().delete(id);
    }

    @Get('count')
    async count(): Promise<number>{
        return await this.getService().count();
    }
}