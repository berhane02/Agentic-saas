import { defineConfig } from "prisma/config";

// Prisma 7 no longer loads .env automatically; use Node's built-in loader.
try {
  process.loadEnvFile();
} catch {
  // no .env file present (e.g. CI) — env vars come from the environment
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
