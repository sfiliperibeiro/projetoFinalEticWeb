/*
  Warnings:

  - You are about to drop the column `bio` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the `consulta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `emailAuth` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordAuth` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_medicoId_fkey`;

-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_pacienteId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `bio`,
    DROP COLUMN `userId`,
    ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `emailAuth` VARCHAR(191) NOT NULL,
    ADD COLUMN `passwordAuth` VARCHAR(191) NOT NULL,
    ADD COLUMN `reservaId` VARCHAR(191) NULL,
    ADD COLUMN `telefone` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `profileId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `consulta`;

-- DropTable
DROP TABLE `medico`;

-- DropTable
DROP TABLE `paciente`;

-- CreateTable
CREATE TABLE `Reserva` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `hora` DATETIME(3) NOT NULL,
    `numeroPessoas` INTEGER NOT NULL,
    `nome` VARCHAR(191) NULL,
    `telefone` INTEGER NULL,
    `email` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `profileId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entradas` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `paoDeAlho` INTEGER NOT NULL,
    `humusCenoura` INTEGER NOT NULL,
    `folhadoAlheira` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PratosPrincipais` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `risottoCogumelos` INTEGER NOT NULL,
    `lasanhaLegumes` INTEGER NOT NULL,
    `raviolisBeterraba` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sobremesas` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `tiramisu` INTEGER NOT NULL,
    `cheesecakeMorango` INTEGER NOT NULL,
    `mousseLimao` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bebidas` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `agua` INTEGER NOT NULL,
    `refrigerantes` INTEGER NOT NULL,
    `sumoNatural` INTEGER NOT NULL,
    `cerveja` INTEGER NOT NULL,
    `vinhoCopo` INTEGER NOT NULL,
    `vinhoGarrafa` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedidos` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `mesaId` VARCHAR(191) NOT NULL,
    `entradasId` VARCHAR(191) NOT NULL,
    `pratosPrincipaisId` VARCHAR(191) NOT NULL,
    `sobremesasId` VARCHAR(191) NOT NULL,
    `bebidasId` VARCHAR(191) NOT NULL,
    `preco` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mesa` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `mesa1` INTEGER NOT NULL,
    `mesa2` INTEGER NOT NULL,
    `mesa3` INTEGER NOT NULL,
    `mesa4` INTEGER NOT NULL,
    `mesa5` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cozinha` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `pedidosId` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Conta` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `pedidosId` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_mesaId_fkey` FOREIGN KEY (`mesaId`) REFERENCES `Mesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_entradasId_fkey` FOREIGN KEY (`entradasId`) REFERENCES `Entradas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_pratosPrincipaisId_fkey` FOREIGN KEY (`pratosPrincipaisId`) REFERENCES `PratosPrincipais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_sobremesasId_fkey` FOREIGN KEY (`sobremesasId`) REFERENCES `Sobremesas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_bebidasId_fkey` FOREIGN KEY (`bebidasId`) REFERENCES `Bebidas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cozinha` ADD CONSTRAINT `Cozinha_pedidosId_fkey` FOREIGN KEY (`pedidosId`) REFERENCES `Pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conta` ADD CONSTRAINT `Conta_pedidosId_fkey` FOREIGN KEY (`pedidosId`) REFERENCES `Pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
