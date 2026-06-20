import express, { type Request, type Response } from "express";
const app = express()

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "welcome to wiki scapper this is very useless" })
})

app.listen(8000, () => console.log("Server is on port 8000"))
