import {Router} from 'express'
import {
        registerHandler,
        loginHandler
}from '../controllers/authController'


const router = Router();


router.post("/signup",registerHandler);
router.post("/login",loginHandler);

export default router