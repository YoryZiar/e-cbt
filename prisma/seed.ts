import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// const initialUsers: Prisma.UserCreateInput[] = [
//     {
//         name: "ecbt",
//         email: "ecbtAdmin@gmail.com",
//         password: `asdfsf`,
//         telephone: "+628814825700"
//     }
// ]

async function main() {
    console.log("Start seeding ...");
    
        const newUser = await prisma.user.create({
            data: {
                name: "ecbt",
                email: "ecbtadmin@gmail.com",
                password: "admin123",
                telephone: "+628814825700",
                role: 0
            }
        });        

    console.log("Seeding Finished");
    
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