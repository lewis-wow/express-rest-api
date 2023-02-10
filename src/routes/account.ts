import { Router } from 'express'

const router = Router()

router.get('/account', (req, res) => {
	res.send({})
})

router.get('/account/jwt', (req, res) => {
	res.send({})
})

router.post('/account/logout', (req, res) => {
	res.send({})
})

router.patch('/account/password', (req, res) => {
	res.send({})
})

export default router
