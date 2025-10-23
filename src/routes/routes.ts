import { Router } from 'express';
import { UserController } from '../controller/crime-guess-controller';
import { register } from '../controller/auth-controller';

const router = Router();

router.get('/scemarios', UserController.scemarios);
router.post('/register', register);

export default router;
