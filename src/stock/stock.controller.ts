/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
import {
  Controller, Get, Post, Body, Patch, Param, Delete, Query,
} from '@nestjs/common';
import { StockDTO } from './dto/stock.dto';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  create(@Body() stock: StockDTO) {
    return this.stockService.create(stock);
  }

  @Get()
  findAll(@Query() params: any) {
    return this.stockService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() stock: StockDTO) {
    return this.stockService.update(id, stock);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(id);
  }
}
