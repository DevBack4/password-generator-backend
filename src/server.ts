import bodyParser from "body-parser"
import express, { type Express, type Request, type Response } from "express"

const app: Express = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

app.post('/auth/signup', (req: Request, res: Response) => {
  const data = req.body
  res.send(`Account created successfully, credentials: ${JSON.stringify(data)}`)
})

app.post('/auth/signin', (req: Request, res: Response) => {
  const data = req.body
  res.send(`Logged successfully using: ${JSON.stringify(data)}`)
})

app.get('/', (req: Request, res: Response) => {
  res.send('Home')
})

// module.exports = app.get('/', (req: Request, res: Response) => {
//   res.send('Trying update')
// })