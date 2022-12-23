-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "status" TEXT,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "photo" TEXT,
    "password" TEXT,
    "firstAccess" BOOLEAN,
    "phone" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
