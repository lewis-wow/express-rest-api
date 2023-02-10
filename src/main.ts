import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
	console.log(`listening on: http://localhost:${process.env.PORT}`)
})
