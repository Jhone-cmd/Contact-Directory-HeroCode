import fastify from "fastify";
import cors from "@fastify/cors";
import { userRoutes } from "./routes/user-routes";
import { contactRoutes } from "./routes/contact-routes";
import { errorHlander } from "./error-handler";

export const app = fastify();

app.register(cors, {
    origin: '*'
});

app.setErrorHandler(errorHlander);

app.register(userRoutes, { 
    prefix: "/users",
});  

app.register(contactRoutes, { 
    prefix: "/contacts",
});   