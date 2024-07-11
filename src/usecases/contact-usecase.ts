import { Contact, ContactCreate, ContactRepository, UpdateContact } from "../interfaces/contact-interface";
import { UserRepository } from "../interfaces/user-interface";
import { ContactRepositoryPrisma } from "../repositories/contact-repository";
import { UserRepositoryPrisma } from "../repositories/user-repository";

class ContactUseCase {
    private contactRepository: ContactRepository;
    private userRepository: UserRepository;
    constructor() {
        this.contactRepository = new ContactRepositoryPrisma();
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({ name, email, phone, userEmail }: ContactCreate): Promise<Contact> {
        const user = await this.userRepository.findByEmail(userEmail);
        if (!user) throw new Error('User not found');

        const verifyIfContactExists = await this.contactRepository.findByEmailOrPhone(email, phone);
        if (verifyIfContactExists) throw new Error('Contact already exists');
        
        const contact = await this.contactRepository.create({
            name, email, phone, userId: user.id,
        });
        return contact;
    }   

    async listAllContacts(userEmail: string) : Promise<Contact[]> {
        const user = await this.userRepository.findByEmail(userEmail);
        if (!user) throw new Error('User not found');
        const contacts = await this.contactRepository.listAllContacts(user.id);
        return contacts;
    }

    async updateContact({ id, name, email, phone }: UpdateContact): Promise<Contact> {
        const contact = await this.contactRepository.updateContact({ id, name, email, phone });
        return contact;
    }

    async deleteContact(id: string): Promise<Boolean> {
        const contact = await this.contactRepository.deleteContact(id);
        return contact;
    }
}

export { ContactUseCase }