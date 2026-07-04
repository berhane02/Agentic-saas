import { PrismaClient } from "@/lib/generated/prisma/client"
import { PrismaMariaDb } from "@prisma/adapter-mariadb"

declare global {
    var prisma: PrismaClient | undefined;
};

// DATABASE_URL may be absent at build time (page-data collection); the
// adapter only connects on first query, so an empty string is safe here.
const adapter = new PrismaMariaDb(process.env.DATABASE_URL ?? "");
const prismadb = globalThis.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
