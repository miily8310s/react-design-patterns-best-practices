import { isBrowser } from "@contentpi/lib";
import { LoginLayout } from "../components/user/LoginLayout";
import UserProvider from "../contexts/user";

interface IProps {
  currentUrl: string;
}

export const login = ({
  currentUrl = isBrowser()
    ? window.location.search.replace("?redirectTo=", "")
    : "",
}: IProps) => {
  return (
    <UserProvider page="login">
      <LoginLayout currentUrl={currentUrl} />
    </UserProvider>
  );
};
