import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
