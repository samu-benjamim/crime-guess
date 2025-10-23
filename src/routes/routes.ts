import { Router } from 'express';
import { UserController } from '../controller/crime-guess-controller';
import { login, register } from '../controller/auth-controller';

const router = Router();

router.get('/scemarios', UserController.scemarios);
router.post('/auth/register', register);
router.post('/auth/login', login);

export default router;
