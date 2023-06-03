/*
  Warnings:

  - You are about to drop the column `idProducto` on the `Inventario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Inventario` DROP FOREIGN KEY `Inventario_idProducto_fkey`;

-- AlterTable
ALTER TABLE `Inventario` DROP COLUMN `idProducto`;

-- CreateTable
CREATE TABLE `_InventarioToProducto` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_InventarioToProducto_AB_unique`(`A`, `B`),
    INDEX `_InventarioToProducto_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_InventarioToProducto` ADD CONSTRAINT `_InventarioToProducto_A_fkey` FOREIGN KEY (`A`) REFERENCES `Inventario`(`idInventario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InventarioToProducto` ADD CONSTRAINT `_InventarioToProducto_B_fkey` FOREIGN KEY (`B`) REFERENCES `Producto`(`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;
