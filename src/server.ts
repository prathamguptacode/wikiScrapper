import express, { type Request, type Response } from "express";
import { wikiScrapper } from "./service/scrap";
const app = express()

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "welcome to wiki scapper this is very useless" })
})

app.get("/wiki/:q", async (req: Request, res: Response) => {
  const query = req.params.q
  if (typeof query == "string") {
    let word = query.toLowerCase()
    const ch = word.split(" ")
    if (ch[1]) {
      return res.status(400).json({ message: "one word only" })
    }
    const txt = await wikiScrapper(word)
    return res.json({ message: txt })
  }
  res.status(400).json({ message: "param q can only be string" })
})

app.listen(8000, () => console.log("Server is on port 8000"))
