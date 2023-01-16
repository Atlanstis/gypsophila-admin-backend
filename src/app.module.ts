import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConfig } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot({ ignoreEnvFile: true, isGlobal: true, load: [getConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get('mysql');
        return {
          ...config,
          entities: [],
          logging: ['error'],
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
