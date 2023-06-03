/*
  Warnings:

  - You are about to drop the column `cantidad` on the `Inventario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Inventario` DROP COLUMN `cantidad`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
