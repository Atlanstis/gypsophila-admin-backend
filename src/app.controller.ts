import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new BusinessException('你这个参数错了');
    return this.appService.getHello();
  }
}
