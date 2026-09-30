import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Iinfo } from './app.service.js';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("Infos")
  getInfos(): Iinfo {
    return this.appService.getInfo()
  }
}
