export interface Contact {
    id: string,
    name: string,
    email: string,
    phone: string,
    userId: string
}

export interface ContactCreate {
    name: string,
    email: string,
    phone: string,
    userEmail: string,
}

export interface ContactCreateData {
    name: string,
    email: string,
    phone: string,
    userId: string
}
export interface UpdateContact {
    id: string,
    name?: string,
    email?: string,
    phone?: string
}

export interface ContactRepository {
    create: (contact: ContactCreateData) => Promise<Contact>;
    findByEmailOrPhone(email: string, phone: string): Promise<Contact | null>;
    listAllContacts(userId: string) : Promise<Contact[]>;
    updateContact({ id, name, email, phone }: UpdateContact): Promise<Contact>;
    deleteContact(id: string): Promise<Boolean>;
}