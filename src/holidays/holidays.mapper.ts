import { Holiday } from '@prisma/client';
import { HolidayEntity } from './entities/holiday.entity';

export function toHolidayEntity(holiday: Holiday): HolidayEntity {
  return {
    date: holiday.date.getDate(),
    month: holiday.date.getMonth() + 1,
    year: holiday.year,
    name: holiday.name,
    type: holiday.type,
  };
}
