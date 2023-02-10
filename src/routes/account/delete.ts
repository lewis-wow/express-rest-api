import { Router, Request } from 'express'

const router = Router()

router.delete('/session/{sessionId}', (req: Request<{ sessionId: string }>, res) => {
	res.send({})
})

router.delete('/sessions', (req, res) => {
	res.send({})
})

export default router
