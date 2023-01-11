import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";

export const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};
