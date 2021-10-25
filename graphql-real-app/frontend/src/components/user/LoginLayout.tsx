import { redirectTo } from "@contentpi/lib";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user";
import { Login } from "./Login";

interface IProps {
  currentUrl: string;
}

export const LoginLayout = ({ currentUrl }: IProps) => {
  const { login } = useContext(UserContext);
  return <Login login={login} currentUrl={currentUrl} />;
};
