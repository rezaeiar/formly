import { Navigate, Outlet } from "react-router";
import { PATHS } from "../paths";

export default function ProtectedRoute() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={PATHS.login()} replace />;
  }

  return <Outlet />;
}