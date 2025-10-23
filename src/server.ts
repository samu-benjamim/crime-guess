import createApp from './app';
import 'dotenv/config';
import { testConnection } from './config/database';

const app = createApp();
const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`O servidor na porta ${port} iniciou.`);

  await testConnection();
});
