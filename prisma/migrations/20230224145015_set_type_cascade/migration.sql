-- DropForeignKey
ALTER TABLE `Products` DROP FOREIGN KEY `Products_typeId_fkey`;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
