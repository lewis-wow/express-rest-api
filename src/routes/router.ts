import { Router } from 'express'
import githubRouter from './auth/github'
import accountCreate from './account/create'
import accountRead from './account/read'
import accountUpdate from './account/update'
import accountDelete from './account/delete'

const router = Router()

router.use('/auth', githubRouter)
router.use('/account', [accountCreate, accountRead, accountUpdate, accountDelete])

export default router
