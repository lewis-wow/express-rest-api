import { Router, Request } from 'express'

const router = Router()

router.post('/', (req, res) => {
	res.send({})
})

router.post('/sessions/email', (req, res) => {
	res.send({})
})

router.post('/session/oauth2/{provider}', (req: Request<{ provider: string }>, res) => {
	res.send({})
})

router.post('/jwt', (req, res) => {
	res.send({})
})

router.post('/recovery', (req, res) => {
	res.send({})
})

router.post('/verification', (req, res) => {
	res.send({})
})

export default router
