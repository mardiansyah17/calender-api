import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { HolidaysService } from './holidays.service';
import { HolidayEntity } from './entities/holiday.entity';

@ApiTags('holidays')
@Controller('holidays')
export class HolidaysController {
  constructor(private readonly holidaysService: HolidaysService) {}

  @Get('')
  @ApiOperation({
    summary: 'Ambil daftar hari libur Indonesia',
    description:
      'Mengambil daftar hari libur nasional dan cuti bersama Indonesia berdasarkan tahun. Data juga dapat difilter berdasarkan bulan.',
  })
  @ApiOkResponse({
    description: 'Daftar hari libur berhasil diambil.',
    type: HolidayEntity,
    isArray: true,
  })
  @ApiBadRequestResponse({
    description: 'Parameter query tidak valid.',
    schema: {
      example: {
        statusCode: 400,
        message: [
          'year must not be less than 1900',
          'month must not be greater than 12',
        ],
        error: 'Bad Request',
      },
    },
  })
  @ApiQuery({ name: 'year', type: Number, example: 2026, required: true })
  @ApiQuery({ name: 'month', type: Number, required: false })
  getHolidaysByYear(
    @Query('year') year: number,
    @Query('month') month?: number,
  ) {
    return this.holidaysService.getHolidaysByYear(year, month);
  }
}
