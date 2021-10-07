import { Request, Response, NextFunction } from "express";

export const isConnected =
  (isLogged = true, privileges = ["user"], redirectTo = "/") =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = getUserData(req.cookies.at);
    if (!user && !isLogged) {
      return next();
    }
    if (user && isLogged) {
      const isVerifiedRole = (roleName: string) => {
        return privileges.includes(roleName) && user.privilege === roleName;
      };
      if (isVerifiedRole("god") || isVerifiedRole("admin")) {
        return next();
      }
    }
    res.redirect(redirectTo);
  };
