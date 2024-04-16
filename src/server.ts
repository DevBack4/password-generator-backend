import express, { type Express, type Request, type Response } from "express";
import prisma from "../prisma/client";

const app: Express = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.get("/", async (req: Request, res: Response) => {
  await prisma.user.create({
    data: 
      {
        name: "roberto",
        email: "roberto09@gmail.com",
        profile_image: "123123.jpg",
        hashed_password: "123912",
      },
    });
  res.send("Trying update");
});

app.get("/userinfo", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

