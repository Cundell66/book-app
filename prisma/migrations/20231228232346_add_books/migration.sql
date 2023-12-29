-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
