import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import {ConfigModule} from '@nestjs/config';
import { createjobofferModule } from './JobOfferE/jobOffer.module'


@Module({
  imports: [ createjobofferModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRESS_HOST,
        port: parseInt(<string>process.env.POSTGRESS_PORT),
        username: process.env.POSTGRESS_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRESS_DATABASE,
        autoLoadEntities: true,
        synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
