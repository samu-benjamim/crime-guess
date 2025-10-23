import express, { json } from 'express';
import cors from 'cors';
import router from './routes/routes';
import userRoutes from './routes/user-routes';

function createApp() {
  const app = express();

  app.use(cors());
  app.use(json());

  app.use('/api', router);
  app.use('/api/user', userRoutes);
  return app;
}

export default createApp;
