import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path/posix'

import { AppController } from '../controllers/app.controller'
import { AppService } from '../services/app.service'
import { DataService } from '../services/data/data.service'

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const NODE_ENV = configService.get<string>('NODE_ENV');
        return [
          {
            rootPath: typeof NODE_ENV === 'undefined' ? join(__dirname, '..', '..', 'client', 'dist') : join(__dirname, '../../../client/dist')
          }
        ]
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DataService],
})
export class AppModule { }


