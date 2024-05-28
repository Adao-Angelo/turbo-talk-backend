import { Router } from "express";
import { usersRoutes } from "./users.routes";

const routers = Router();
routers.use("/users", usersRoutes);

export { routers };
