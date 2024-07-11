import { FastifyReply, FastifyRequest } from "fastify";

export async function authMiddleware(req: FastifyRequest, reply: FastifyReply) {
    const emailHeader = req.headers['email'];
    if (!emailHeader) return reply.status(401).send({ message: "'Email is required" });
}