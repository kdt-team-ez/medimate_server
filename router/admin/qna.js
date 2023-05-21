import express from 'express'
import * as QNA from '../../controller/admin/qna.js'
import { isAuth } from '../../middleware/token.js'

const app = express()
app.use(express.json())

const router = express.Router()


router.get('/',QNA.SearchQnaAll)
router.get('/:id',QNA.SearchQnaOne)


router.post('/',isAuth,QNA.MakeQna)

router.put('/:id',QNA.ChangeQna)


export default router; 