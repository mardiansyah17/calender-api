import { HolidayScope, HolidayType, Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const d = (date: string) => new Date(`${date}T00:00:00.000Z`);

const source2024 = 'SKB Perubahan Libur Nasional dan Cuti Bersama 2024';
const source2025 = 'SKB Perubahan Libur Nasional dan Cuti Bersama Tahun 2025';
const source2026 = 'SKB Libur Nasional dan Cuti Bersama Tahun 2026';

const holidays: Prisma.HolidayCreateManyInput[] = [
  // Libur Nasional 2024
  { date: d('2024-01-01'), name: 'Tahun Baru 2024 Masehi', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-02-08'), name: 'Isra Mikraj Nabi Muhammad S.A.W.', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-02-10'), name: 'Tahun Baru Imlek 2575 Kongzili', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-03-11'), name: 'Hari Suci Nyepi Tahun Baru Saka 1946', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-03-29'), name: 'Wafat Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-03-31'), name: 'Kebangkitan Yesus Kristus (Paskah)', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-04-10'), name: 'Hari Raya Idul Fitri 1445 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-04-11'), name: 'Hari Raya Idul Fitri 1445 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-05-01'), name: 'Hari Buruh Internasional', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-05-09'), name: 'Kenaikan Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-05-23'), name: 'Hari Raya Waisak 2568 BE', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-06-01'), name: 'Hari Lahir Pancasila', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-06-17'), name: 'Hari Raya Idul Adha 1445 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-07-07'), name: '1 Muharam Tahun Baru Islam 1446 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-08-17'), name: 'Proklamasi Kemerdekaan', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-09-16'), name: 'Maulid Nabi Muhammad S.A.W.', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-12-25'), name: 'Kelahiran Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },

  // Cuti Bersama 2024
  { date: d('2024-02-09'), name: 'Cuti Bersama Tahun Baru Imlek 2575 Kongzili', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-03-12'), name: 'Cuti Bersama Hari Suci Nyepi Tahun Baru Saka 1946', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-04-08'), name: 'Cuti Bersama Hari Raya Idul Fitri 1445 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-04-09'), name: 'Cuti Bersama Hari Raya Idul Fitri 1445 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-04-12'), name: 'Cuti Bersama Hari Raya Idul Fitri 1445 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-04-15'), name: 'Cuti Bersama Hari Raya Idul Fitri 1445 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-05-10'), name: 'Cuti Bersama Kenaikan Yesus Kristus', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-05-24'), name: 'Cuti Bersama Hari Raya Waisak 2568 BE', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-06-18'), name: 'Cuti Bersama Hari Raya Idul Adha 1445 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },
  { date: d('2024-12-26'), name: 'Cuti Bersama Kelahiran Yesus Kristus', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2024, source: source2024 },

  // Libur Nasional 2025
  { date: d('2025-01-01'), name: 'Tahun Baru 2025 Masehi', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-01-27'), name: 'Isra Mikraj Nabi Muhammad S.A.W.', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-01-29'), name: 'Tahun Baru Imlek 2576 Kongzili', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-03-29'), name: 'Hari Suci Nyepi Tahun Baru Saka 1947', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-03-31'), name: 'Idul Fitri 1446 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-04-01'), name: 'Idul Fitri 1446 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-04-18'), name: 'Wafat Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-04-20'), name: 'Kebangkitan Yesus Kristus (Paskah)', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-05-01'), name: 'Hari Buruh Internasional', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-05-12'), name: 'Hari Raya Waisak 2569 BE', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-05-29'), name: 'Kenaikan Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-06-01'), name: 'Hari Lahir Pancasila', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-06-06'), name: 'Idul Adha 1446 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-06-27'), name: '1 Muharam Tahun Baru Islam 1447 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-08-17'), name: 'Proklamasi Kemerdekaan', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-09-05'), name: 'Maulid Nabi Muhammad S.A.W.', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-12-25'), name: 'Kelahiran Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },

  // Cuti Bersama 2025
  { date: d('2025-01-28'), name: 'Cuti Bersama Tahun Baru Imlek 2576 Kongzili', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-03-28'), name: 'Cuti Bersama Hari Suci Nyepi Tahun Baru Saka 1947', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-04-02'), name: 'Cuti Bersama Idul Fitri 1446 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-04-03'), name: 'Cuti Bersama Idul Fitri 1446 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-04-04'), name: 'Cuti Bersama Idul Fitri 1446 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-04-07'), name: 'Cuti Bersama Idul Fitri 1446 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-05-13'), name: 'Cuti Bersama Hari Raya Waisak 2569 BE', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-05-30'), name: 'Cuti Bersama Kenaikan Yesus Kristus', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-06-09'), name: 'Cuti Bersama Idul Adha 1446 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-08-18'), name: 'Cuti Bersama Proklamasi Kemerdekaan', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },
  { date: d('2025-12-26'), name: 'Cuti Bersama Kelahiran Yesus Kristus', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2025, source: source2025 },

  // Libur Nasional 2026
  { date: d('2026-01-01'), name: 'Tahun Baru 2026 Masehi', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-01-16'), name: 'Isra Mikraj Nabi Muhammad S.A.W.', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-02-17'), name: 'Tahun Baru Imlek 2577 Kongzili', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-03-19'), name: 'Hari Suci Nyepi Tahun Baru Saka 1948', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-03-21'), name: 'Idul Fitri 1447 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-03-22'), name: 'Idul Fitri 1447 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-04-03'), name: 'Wafat Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-04-05'), name: 'Kebangkitan Yesus Kristus (Paskah)', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-05-01'), name: 'Hari Buruh Internasional', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-05-14'), name: 'Kenaikan Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-05-27'), name: 'Idul Adha 1447 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-05-31'), name: 'Hari Raya Waisak 2570 BE', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-06-01'), name: 'Hari Lahir Pancasila', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-06-16'), name: '1 Muharam Tahun Baru Islam 1448 Hijriah', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-08-17'), name: 'Proklamasi Kemerdekaan', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-08-25'), name: 'Maulid Nabi Muhammad S.A.W.', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-12-25'), name: 'Kelahiran Yesus Kristus', type: HolidayType.NATIONAL_HOLIDAY, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },

  // Cuti Bersama 2026
  { date: d('2026-02-16'), name: 'Cuti Bersama Tahun Baru Imlek 2577 Kongzili', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-03-18'), name: 'Cuti Bersama Hari Suci Nyepi Tahun Baru Saka 1948', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-03-20'), name: 'Cuti Bersama Idul Fitri 1447 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-03-23'), name: 'Cuti Bersama Idul Fitri 1447 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-03-24'), name: 'Cuti Bersama Idul Fitri 1447 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-05-15'), name: 'Cuti Bersama Kenaikan Yesus Kristus', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-05-28'), name: 'Cuti Bersama Idul Adha 1447 Hijriah', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
  { date: d('2026-12-24'), name: 'Cuti Bersama Kelahiran Yesus Kristus', type: HolidayType.JOINT_LEAVE, scope: HolidayScope.NATIONAL, year: 2026, source: source2026 },
];

async function main() {
  const result = await prisma.holiday.createMany({
    data: holidays,
    skipDuplicates: true,
  });

  console.log(`Seed selesai. Inserted: ${result.count}. Total seed rows: ${holidays.length}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
