import { User, UserCreate, UserRepository } from "../interfaces/user-interface";
import { prisma } from "../lib/prisma";

class UserRepositoryPrisma implements UserRepository {
    async create(data: UserCreate): Promise<User> {
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email
            }
        });
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: { email } 
        });

        return user || null;
    }
}

export { UserRepositoryPrisma }