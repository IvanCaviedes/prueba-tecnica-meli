import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path/posix';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { DataService } from '../services/data/data.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'dist'),
      exclude: ['api/*']
    })
  ],
  controllers: [AppController],
  providers: [AppService, DataService],
})
export class AppModule { }
