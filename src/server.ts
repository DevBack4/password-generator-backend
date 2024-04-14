import express, { type Express, type Request, type Response } from "express"

const app: Express = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

app.get('/', (req: Request, res: Response) => {
  res.send('Trying update')
})

module.exports = app.get('/', (req: Request, res: Response) => {
  res.send('Trying update')
})
