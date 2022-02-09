import { NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";

import IResponse from "../@types/response";
import IUser from "../@types/user";
import isEmail from "../utils/isEmail";

import { config } from "../config";

export const NewUser = async (req: any, res: any, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    name.trim() == "" ||
    email.trim() == "" ||
    password.trim() == "" ||
    email == "" ||
    password == "" ||
    name == ""
  ) {
    const response: IResponse = {
      success: false,
      message: "All fields are required.",
      error: {
        code: 400,
        details: "Missing fields",
      },
    };

    return res.status(200).json(response);
  }

  if (!isEmail(email)) {
    const response: IResponse = {
      success: false,
      message: "Invalid email.",
      error: {
        code: 400,
        details: "Invalid email",
      },
    };

    return res.status(200).json(response);
  }

  const user = await User.findOne({ email });

  if (user) {
    const response: IResponse = {
      success: false,
      message: "A user with that email already exists.",
      error: {
        code: 400,
        details: "User already exists",
      },
    };

    return res.status(200).json(response);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: IUser = {
    name,
    email,
    password: hashedPassword,
    method: "password",
  };

  await User.create(newUser);

  const createdUser = await User.findOne({ email }).select("-password");

  const response: IResponse = {
    success: true,
    message: "User created successfully.",
    response: {
      data: createdUser,
      timestamp: Date.now(),
    },
  };

  const token = jwt.sign(createdUser._id.toString(), config.JWT_SECRET!);

  res
    .cookie(`${config.app.cookiePrefix}_token`, token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 69 /* 69 days */,
    })
    .send(response);

  return next();
};

export const OldUser = async (req: any, res: any, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    const response: IResponse = {
      success: false,
      message: "Invalid email or password. Try again?",
      error: {
        code: 400,
        details: "Invalid email or password",
      },
    };

    return res.status(200).json(response);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    const response: IResponse = {
      success: false,
      message: "Invalid email or password. Try again?",
      error: {
        code: 400,
        details: "Invalid email or password",
      },
    };

    return res.status(200).json(response);
  }

  const protectedUser = await User.findOne({ email }).select("-password");

  const response: IResponse = {
    success: true,
    message: `You're logged in as ${user.name}.`,
    response: {
      data: protectedUser,
      timestamp: Date.now(),
    },
  };

  const token = jwt.sign(protectedUser._id.toString(), config.JWT_SECRET!);

  res
    .cookie(`${config.app.cookiePrefix}_token`, token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 69 /* 69 days */,
    })
    .send(response);

  return next();
};

export const Logout = async (req: any, res: any, next: NextFunction) => {
  const response: IResponse = {
    success: true,
    message: "You're logged out.",
    response: {
      data: null,
      timestamp: Date.now(),
    },
  };

  res.clearCookie(`${config.app.cookiePrefix}_token`).json(response);

  return next();
};

export const ChangePassword = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  const { oldPassword, newPassword } = req.body;

  if (
    !oldPassword ||
    !newPassword ||
    oldPassword.trim() == "" ||
    newPassword.trim() == "" ||
    oldPassword == "" ||
    newPassword == ""
  ) {
    const response: IResponse = {
      success: false,
      message: "All fields are required.",
      error: {
        code: 400,
        details: "Missing fields",
      },
    };

    return res.status(200).json(response);
  }
  const user = await User.findById(req.userID);

  const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
  const isEqualToOldPassword = await bcrypt.compare(newPassword, user.password);
  if (!isPasswordValid) {
    const response: IResponse = {
      success: false,
      message: "Are you sure that's the right password?",
      error: {
        code: 400,
        details: "Invalid password",
      },
    };
    return res.status(200).json(response);
  }

  if (isEqualToOldPassword) {
    const response: IResponse = {
      success: false,
      message: "Your new password can't be the same as your old password.",
      error: {
        code: 400,
        details: "Duplicate password",
      },
    };
    return res.status(200).json(response);
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.userID },
    { password: hashedPassword }
  ).select("-password");

  const response: IResponse = {
    success: true,
    message: "Your Password was changed successfully.",
    response: {
      data: updatedUser,
      timestamp: Date.now(),
    },
  };

  return res.status(200).json(response);
};
