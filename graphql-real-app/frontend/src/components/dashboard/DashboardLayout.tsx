import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { Dashboard } from "./Dashboard";

export const DashboardLayout = () => {
  const { connectedUser } = useContext(UserContext);
  if (connectedUser) {
    return <Dashboard connectedUser={connectedUser} />;
  }
  return <div />;
};
