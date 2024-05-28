import { Router, request, response } from "express";

const usersRoutes = Router();

usersRoutes.get("/", async (request, response) => {
  return response.json({ routes: "/users" });
});

usersRoutes.post("/", async (request, response) => {});

export { usersRoutes };
