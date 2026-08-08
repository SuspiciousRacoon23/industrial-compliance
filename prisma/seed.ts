import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10)

  const org = await prisma.organization.create({
    data: {
      name: 'BxT Manufacturing Ltd.',
      sites: {
        create: [
          { name: 'Pune Factory', location: 'Pune, Maharashtra' },
          { name: 'Bangalore Warehouse', location: 'Bangalore, Karnataka' }
        ]
      }
    }
  })

  const admin = await prisma.user.upsert({
    where: { email: 'admin@bxtlabs.com' },
    update: {},
    create: {
      email: 'admin@bxtlabs.com',
      name: 'System Admin',
      passwordHash,
      role: 'FOUNDER',
      organizationId: org.id
    },
  })

  console.log('Seeded successfully:')
  console.log({ org, admin })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
