import createApp from './app';
import 'dotenv/config';
import { testConnection } from './config/database';
import { syncDatabase } from './database/sync-database';

const app = createApp();
const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`O servidor na porta ${port} iniciou.`);
  await syncDatabase();
  await testConnection();
});
