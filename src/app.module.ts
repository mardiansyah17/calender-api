import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HolidaysModule } from './holidays/holidays.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    PrismaModule,
    HolidaysModule,
  ],
})
export class AppModule {}
