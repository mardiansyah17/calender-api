import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { formatDateOnly } from '../common/utils/date-only.util';
import { PrismaService } from '../prisma/prisma.service';
import { HolidayEntity } from './entities/holiday.entity';
import { toHolidayEntity } from './holidays.mapper';

@Injectable()
export class HolidaysService {
  constructor(private readonly prisma: PrismaService) {}

  async getHolidaysByYear(
    year: number,
    month?: number,
  ): Promise<HolidayEntity[]> {
    const start = new Date(Date.UTC(year, 1 - 1, 1));
    const end = new Date(Date.UTC(year, month ? month : 12, 1));

    const where: Prisma.HolidayWhereInput = {
      date: {
        gte: formatDateOnly(start),
        lte: formatDateOnly(end),
      },
    };

    const holidays = await this.prisma.holiday.findMany({ where });

    return holidays.map(toHolidayEntity);
  }
}
