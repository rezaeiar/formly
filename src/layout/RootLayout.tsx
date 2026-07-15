import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="bg-slate-50">
      <Outlet />
    </div>
  )
}