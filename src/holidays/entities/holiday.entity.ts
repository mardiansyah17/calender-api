import { ApiProperty } from '@nestjs/swagger';
import { HolidayType } from '@prisma/client';

export class HolidayEntity {
  @ApiProperty({ example: 1 })
  date!: number;

  @ApiProperty({ example: 1 })
  month!: number;

  @ApiProperty({ example: 2026 })
  year!: number;

  @ApiProperty({ example: 'Tahun Baru 2026 Masehi' })
  name!: string;

  @ApiProperty({ enum: HolidayType, example: HolidayType.NATIONAL_HOLIDAY })
  type!: HolidayType;
}
