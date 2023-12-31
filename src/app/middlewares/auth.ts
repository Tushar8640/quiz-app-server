import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../config";
import { verifyToken } from "../../shared/jwtHelpers";
import { ApiError } from "../../handleErrors/ApiError";

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
     
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }
      console.log(token);
      const accessToken = token.split(" ")[1];
      console.log("access token",accessToken);
      // verify token
      let verifiedUser = null;

      verifiedUser = verifyToken(token, config.jwt.secret as Secret);
      console.log("verified user", verifiedUser);
      req.user = verifiedUser;

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
