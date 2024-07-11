import { FastifyInstance } from "fastify";
import { ContactCreate, UpdateContact } from "../interfaces/contact-interface";
import { ContactUseCase } from "../usecases/contact-usecase";
import { authMiddleware } from "../middlewares/auth-middleware";
import { error } from "console";

export async function contactRoutes(app: FastifyInstance) {
    const contactUseCase = new ContactUseCase();
    app.addHook('preHandler', authMiddleware);

    app.post<{ Body: ContactCreate }>('/', async (req, reply) => {
        const { name, email, phone } = req.body;
        const emailUser = req.headers['email'] as string;
       
        try {
            const data = await contactUseCase.create({
                name, email, phone,
                userEmail: emailUser
             });
            return reply.send(data);

        } catch (error) {
            return reply.send(error);
        }
    });

    app.get('/', async (req, reply) => {
        try {
            const emailUser = req.headers['email']
            const data = await contactUseCase.listAllContacts(emailUser as string);
            return reply.send(data);
        } catch (error) {
            return reply.send(error);
        }
    });

    app.put<{ Body: UpdateContact, Params: { id: string } }>('/:id', async (req, reply) => {
        const { id } = req.params;
        const { name, email, phone } = req.body;       
        try {
            const data = await contactUseCase.updateContact({ id, name, email, phone });
            return reply.send(data);
        } catch (error) {
            return reply.send(error);
        }
    });

    app.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
        const { id } = req.params;  
        try {
            await contactUseCase.deleteContact(id);
            console.log(error);
            return reply.send({ message: 'Contact Successfully Deleted' });
            
            
        } catch (error) {            
            return reply.send(error);
        }
    });
}