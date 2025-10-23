import { Router, Request, Response } from 'express';
import { authMiddleware } from '../middlewares/auth-middlewares';

const router = Router();

router.get('/profile', authMiddleware, (req: Request, res: Response) => {
  const user = (req as any).user;
  res.json({ message: `Bem-vindo, ${user.username}!`, user });
});

export default router;
