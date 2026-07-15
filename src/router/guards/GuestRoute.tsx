import { Navigate, Outlet } from "react-router";
import { PATHS } from "../paths";

export default function GuestRoute() {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to={PATHS.dashboard()} replace />;
  }

  return <Outlet />;
}