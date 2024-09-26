-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_jurnalId_fkey";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_jurnalId_fkey" FOREIGN KEY ("jurnalId") REFERENCES "Jurnal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
