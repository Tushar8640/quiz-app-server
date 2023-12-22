/*
  Warnings:

  - Added the required column `quizId` to the `quizSessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "quizes" DROP CONSTRAINT "quizes_quizSessionId_fkey";

-- AlterTable
ALTER TABLE "quizSessions" ADD COLUMN     "quizId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "quizSessions" ADD CONSTRAINT "quizSessions_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
