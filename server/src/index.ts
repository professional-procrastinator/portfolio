import { httpServer } from './app';
import { config, connectMongo, initRedis } from './config';

httpServer.listen(config.PORT, async () => {
  await connectMongo();
  await initRedis();
  console.log(`Server is running on port ${config.PORT}`);
});
