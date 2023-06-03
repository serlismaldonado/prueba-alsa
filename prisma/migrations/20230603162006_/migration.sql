/*
  Warnings:

  - Added the required column `idCliente` to the `Inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idEmpleado` to the `Inventario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Inventario` ADD COLUMN `idCliente` INTEGER NOT NULL,
    ADD COLUMN `idEmpleado` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Inventario` ADD CONSTRAINT `Inventario_idEmpleado_fkey` FOREIGN KEY (`idEmpleado`) REFERENCES `Empleado`(`idEmpleado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventario` ADD CONSTRAINT `Inventario_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Cliente`(`idCliente`) ON DELETE RESTRICT ON UPDATE CASCADE;
