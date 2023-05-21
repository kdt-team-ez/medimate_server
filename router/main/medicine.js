import express from 'express'
import * as a from '../../controller/main/medicine.js'


const app = express()
app.use(express.json())

const router = express.Router()

/* router.use((req,res,next)=>{
    res.render(path+'/Server/views/medicine-search-main.ejs')
    console.log('약 검색 페이지 접속')
    next()
}) */

router.get('/',a.SearchMedicineAll)
router.get('/:id',a.SearchMedicineOne)


router.put('/',(req, res) => {
    return null
})

router.delete('/',(req, res) => {
    return null
})

export default router; 