import { Router } from 'express'
import { exampleRoute } from './exampleRoute.js'

const router = Router()

router.use('/demo', exampleRoute)

export default router
