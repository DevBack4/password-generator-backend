import express, { type Express, type Request, type Response } from "express";
import prisma from "../prisma/client";

const app: Express = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.get("/", async (req: Request, res: Response) => {
  res.send("");
});

// ADD - USER
app.post("/add-user", async (req: Request, res: Response) => {

  const { userName, userEmail, userPassword } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name: userName,
        email: userEmail,
        password: userPassword,
      },
    });

    res.send(  {
      "status":"success",
      "user": userName,
      "email": userEmail  
      
    });

  } catch (error: ErrorEvent | any) { res.send("Something was wrong!")};
});

