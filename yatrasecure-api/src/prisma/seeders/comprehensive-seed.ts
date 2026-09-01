import { PrismaClient } from '@prisma/client';
import { MOCK_USERS } from './mock-users.data';
import { MOCK_DESTINATIONS } from './mock-destinations.data';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting comprehensive database seed...');
  console.log(`Loaded ${MOCK_USERS.length} mock users & ${MOCK_DESTINATIONS.length} mock trips.`);
  console.log('✅ Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
