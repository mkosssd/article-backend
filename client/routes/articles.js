import { Router } from 'express';
import { getAllArticles, getArticleById } from '../controller/article.js';


const router = Router()


router.get('/', getAllArticles)
router.get('/:id', getArticleById)


export default router;
