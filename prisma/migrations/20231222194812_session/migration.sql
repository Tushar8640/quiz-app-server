/*
  Warnings:

  - You are about to drop the column `quizSessionId` on the `quizes` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "quizes_quizSessionId_key";

-- AlterTable
ALTER TABLE "quizes" DROP COLUMN "quizSessionId";
