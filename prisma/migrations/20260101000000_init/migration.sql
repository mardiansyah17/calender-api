-- CreateTable
CREATE TABLE `holidays` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `type` ENUM('NATIONAL_HOLIDAY', 'JOINT_LEAVE') NOT NULL,
    `scope` ENUM('NATIONAL', 'REGIONAL') NOT NULL DEFAULT 'NATIONAL',
    `year` INTEGER NOT NULL,
    `description` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `source` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `holidays_year_idx`(`year`),
    INDEX `holidays_date_idx`(`date`),
    INDEX `holidays_type_idx`(`type`),
    INDEX `holidays_isActive_idx`(`isActive`),
    UNIQUE INDEX `holidays_date_type_key`(`date`, `type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
