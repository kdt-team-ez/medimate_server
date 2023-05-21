import express from 'express';
import * as INFO from '../../controller/main/mypage/info.js'
import {isAuth} from '../../middleware/token.js'


const router = express.Router();




router.get('/',isAuth)
router.put('/',isAuth,INFO.updateUserInfo)



export default router;