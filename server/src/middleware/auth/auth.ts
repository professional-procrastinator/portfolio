import { NextFunction } from "express";
import { config } from "../../config";
import IResponse from "../../@types/response";
import jwt from "jsonwebtoken";

const Auth = (req: any, res: any, next: NextFunction) => {
  const token = req.cookies[`${config.app.cookiePrefix}_token`];

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.userID = decoded;
    return next();
  } catch (err) {}

  return next();
};

export default Auth;
