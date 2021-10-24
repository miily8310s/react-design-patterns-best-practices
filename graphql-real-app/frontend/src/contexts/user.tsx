import { useQuery, useMutation } from "@apollo/client";
import { getDebug, getGraphQlError, redirectTo } from "@contentpi/lib";
import { createContext, useState, useEffect, ReactElement } from "react";
import { useCookies } from "react-cookie";

import LOGIN_MUTATION from "../graphql/user/login.mutation";
import GET_USER_DATA_QUERY from "../graphql/user/getUserData.query";

interface IUserContext {
  login(input: any): any;
  connectedUser: any;
}

interface IProps {
  page?: string;
  children: ReactElement;
}

export const UserContext = createContext<IUserContext>({
  login: () => null,
  connectedUser: null,
});

const UserProvider = ({ page = "", children }: IProps) => {
  const [cookies, setCookies] = useCookies();
  const [connectedUser, setConnectedUser] = useState(null);
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const { data: dataUser } = useQuery(GET_USER_DATA_QUERY, {
    variables: {
      at: cookies.at || "",
    },
  });
  // TODO: useEffect以降をきさいする
};
