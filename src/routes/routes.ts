import { Router } from 'express';
import { UserController } from '../controller/crime-guess-controller';
import { login, register } from '../controller/auth-controller';
import { registerScenario } from '../controller/scernarios-controller';

const router = Router();

router.get('/scemarios', UserController.scemarios);
router.post('/auth/register', register);
router.post('/auth/login', login);
router.post('/scenarios/register', registerScenario);

export default router;
