import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { FastifyInstance } from "fastify";

type FastifyErrorHandler = FastifyInstance['errorHandler'];

export const errorHlander: FastifyErrorHandler = (error, req, reply) => {

    if (error instanceof PrismaClientKnownRequestError) {
        return reply.status(404).send({ 
            message: 'Resource Not Found',
            code: error.code,
            error: error.meta
        });
    }

    console.log(error);
    return reply.status(500).send({ message: 'Internal Server Error' });
}