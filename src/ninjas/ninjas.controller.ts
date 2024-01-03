import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinja(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.ninjasService.getNinjas(weapon);
  }
  @Get(':id')
  getNinjaId(@Param('id') id: string) {
    return id;
  }
  @Post()
  createNinja(@Body() createNinja: CreateNinjaDto) {
    return { name: createNinja.name };
  }
}
