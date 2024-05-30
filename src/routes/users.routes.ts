import { Router, request, response } from "express";
import { uploads } from "../config/uploadsConfig";
import multer from "multer";

const usersRoutes = Router();
const uploadsAvatar = multer(uploads.upload("./avatars"));

usersRoutes.get("/", async (request, response) => {
  return response.json({ routes: "/users" });
});

usersRoutes.post("/", async (request, response) => {});

usersRoutes.patch(
  "/avatar",
  uploadsAvatar.single("file"),
  async (request, response) => {
    return response.json();
  }
);

export { usersRoutes };
