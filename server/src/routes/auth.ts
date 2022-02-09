import Auth from "../middleware/auth/auth";
import { Router } from "express";

//init
const authRouter = Router();
import { redisClient } from "../config";

import { NewUser, OldUser, Logout, ChangePassword } from "../controllers/auth";

authRouter.post("/signup", NewUser);
authRouter.post("/login", OldUser);
authRouter.post("/logout", Auth, Logout);
authRouter.post("/password", Auth, ChangePassword);

export default authRouter;
