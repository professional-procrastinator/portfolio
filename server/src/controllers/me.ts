import { NextFunction } from "express";
import IResponse from "../@types/response";

import User from "../models/user";

export const Me = async (req: any, res: any, next: NextFunction) => {
  if (!req.userID) {
    const response: IResponse = {
      success: false,
      message: "Invalid token",
      error: {
        code: 401,
        details: "Invalid JWT token",
      },
    };
    return res.status(200).json(response);
  }
  const user = await User.findById(req.userID).select("-password");

  const response: IResponse = {
    success: true,
    message: "User found.",
    response: {
      data: user,
      timestamp: Date.now(),
    },
  };

  return res.status(200).json(response);
};

export const ThemePreference = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  const { theme } = req.body;

  if (theme != "dark" && theme != "light") {
    const response: IResponse = {
      success: false,
      message: "Invalid theme",
      error: {
        code: 400,
        details: "Invalid theme",
      },
    };
    return res.status(200).json(response);
  }

  const user = await User.findByIdAndUpdate(req.userID, {
    theme: theme,
  }).select("-password");

  const response: IResponse = {
    success: true,
    message: "Your theme preference was updated.",
    response: {
      data: user,
      timestamp: Date.now(),
    },
  };

  return res.status(200).json(response);
};
