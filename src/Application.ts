import 'dotenv/config'
import express, { Express } from 'express'

export class Application {
  private app: Express

  constructor() {
    this.app = express()
    this.app.use(express.json())
  }

  server() {
    const port = process.env.PORT || 80

    this.app.listen(port, () => {
      console.log(`⚡ Server running on port ${port}`)
    })
  }
}
