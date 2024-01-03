import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import config from './config/keys';
@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), NinjasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
