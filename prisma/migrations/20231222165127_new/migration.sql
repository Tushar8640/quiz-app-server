/*
  Warnings:

  - A unique constraint covering the columns `[quizSessionId]` on the table `quizes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "quizes_quizSessionId_key" ON "quizes"("quizSessionId");
