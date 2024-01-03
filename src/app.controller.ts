import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get(':id')
  getHello(@Param() params: any): string {
    console.log(params.id);
    return `This is number # ${params.id} cat`;
    // return this.appService.getHello();
  }
}
