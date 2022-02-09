import app from "./app";
import { config, connectMongo, initRedis } from "./config";

app.listen(config.PORT, async () => {
  await connectMongo();
  await initRedis();
  console.log(`Server is running on port ${config.PORT}`);
});
