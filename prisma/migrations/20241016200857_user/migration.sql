-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CUSTOMAER', 'ADMIN', 'SELLER');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'CUSTOMAER',
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profilePhoto" TEXT,
    "phoneNumber" TEXT,
    "address" TEXT,
    "email" TEXT NOT NULL,
    "lastModified" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profile_email_key" ON "profile"("email");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_email_fkey" FOREIGN KEY ("email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
