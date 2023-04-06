import { Router } from 'express'
import { getExample } from '../controller/exampleController.js'

const router = Router()

router.get('/', getExample)

export const exampleRoute = router
