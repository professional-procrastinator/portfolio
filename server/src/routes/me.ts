import Auth from "../middleware/auth/auth";
import { Router } from "express";

//init
const meRouter = Router();
import { redisClient } from "../config";

import { Me, ThemePreference } from "../controllers/me";

meRouter.get("/", Auth, Me);
meRouter.post("/theme", Auth, Me);

export default meRouter;
