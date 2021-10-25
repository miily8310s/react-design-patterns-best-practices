import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import UserProvider from "../contexts/user";

export const dashboard = () => {
  return (
    <UserProvider>
      <DashboardLayout />
    </UserProvider>
  );
};
