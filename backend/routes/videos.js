import express from 'express';

import { addVideo, addView, deleteVideo, getVideo, updateVideo,trend,sub, random, getByTags, search, } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js'
const router = express.Router();

// Create 
router.post('/', verifyToken, addVideo)
router.put('/:id', verifyToken, updateVideo)
router.delete('/:id', verifyToken, deleteVideo)
router.get('/find/:id', getVideo)
router.put('/view/:id', addView)
router.get('/trends',trend) 
router.get('/random', random)
router.get('/sub', verifyToken,sub)
router.get('/tags',getByTags)
router.get('/search',search)


export default router;