/*
  Warnings:

  - You are about to drop the `_InventarioToProducto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_InventarioToProducto` DROP FOREIGN KEY `_InventarioToProducto_A_fkey`;

-- DropForeignKey
ALTER TABLE `_InventarioToProducto` DROP FOREIGN KEY `_InventarioToProducto_B_fkey`;

-- AlterTable
ALTER TABLE `Inventario` ADD COLUMN `idProducto` INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE `_InventarioToProducto`;

-- AddForeignKey
ALTER TABLE `Inventario` ADD CONSTRAINT `Inventario_idProducto_fkey` FOREIGN KEY (`idProducto`) REFERENCES `Producto`(`idProducto`) ON DELETE RESTRICT ON UPDATE CASCADE;
