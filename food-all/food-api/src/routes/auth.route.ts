import { Router } from "express";

import { getAuthRefresh } from "../controllers/Auth/get-auth-refresh";
import { getVerifyPass } from "../controllers/Auth/get-verify-password";
import { postAuthSignin } from "../controllers/Auth/post-auth-signin";
import { postAuthSignup } from "../controllers/Auth/post-auth-signup";
import { postResetpassword } from "../controllers/Auth/post-resetpassword";
import { UserExists } from "../controllers/Auth/userExists";
import { authenticationMiddleware } from "../middlewares/authentication-middleware";

const authRouter = Router();

authRouter
  .get("/refresh", authenticationMiddleware, getAuthRefresh)
  .get("/verify-reset-password-request", getVerifyPass)
  .post("/sign-in", postAuthSignin)
  .post("/sign-up", postAuthSignup)
  .post("/reset-password-request", postResetpassword);
export default authRouter;
