import express from 'express';
import * as AnnounceController from '../../controller/admin/announcement.js';
import { isAuth } from '../../middleware/token.js'

const router = express.Router();


router.post('/', isAuth,AnnounceController.createAnnounce);

router.get('/:id',isAuth, AnnounceController.searchAnnounceNum);

router.get('/:id',isAuth, AnnounceController.searchAnnounceByTitle);

router.get('/', isAuth,AnnounceController.getAllAnnounce);

router.put('/:id', isAuth,AnnounceController.updateAnnounce);

router.delete('/',isAuth, AnnounceController.deleteAnnounce);

export default router;