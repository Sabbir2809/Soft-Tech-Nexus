import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(req.cookies); // Debug: log cookies to ensure they are being sent

  if (!token) {
    return next(new ErrorHandler("User not Authenticated!", 400));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded); // Debug: log decoded token to ensure it is correct

    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return next(new ErrorHandler("User not found!", 404));
    }

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token!", 400));
  }
});
