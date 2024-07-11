export interface User {
    id: string,
    name: string,
    email: string,
    created_at: Date,
    updated_at: Date,
}

export interface UserCreate {
    name: string,
    email: string,
}

export interface UserRepository {
    create: (user: UserCreate) => Promise<User>;
    findByEmail: (email: string) => Promise<User | null> ;
}