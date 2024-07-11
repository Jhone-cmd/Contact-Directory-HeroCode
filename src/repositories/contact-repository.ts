import { Contact, ContactCreateData, ContactRepository, UpdateContact } from "../interfaces/contact-interface";
import { prisma } from "../lib/prisma";

class ContactRepositoryPrisma implements ContactRepository {
    async create(data: ContactCreateData): Promise<Contact> {
        const contact = await prisma.contact.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                userId: data.userId
            }
        });
        return contact;
    }

    async findByEmailOrPhone(email: string, phone: string): Promise<Contact | null> {
        const contact = await prisma.contact.findFirst({
            where: { 
                OR: [
                    { email },
                    { phone }
                ]
            }
        });

        return contact || null;
    } 

    async listAllContacts(userId: string) : Promise<Contact[]> {
        const contacts = await prisma.contact.findMany({
            where: { userId }
        })
        return contacts;
    }

    async updateContact({ id, name, email, phone }: UpdateContact): Promise<Contact> {
        const contact = await prisma.contact.update({
            where: { id },
            data: {
                name,
                email,
                phone
            }
        });
        return contact
    }

    async deleteContact(id: string): Promise<Boolean> {
        const contact = await prisma.contact.delete({
            where: { id }
        });
        return contact ? true : false
    }
}

export { ContactRepositoryPrisma }