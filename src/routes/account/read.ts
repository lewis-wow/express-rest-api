import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
	res.send({})
})

router.get('/jwt', (req, res) => {
	res.send({})
})

export default router
