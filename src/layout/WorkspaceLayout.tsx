import { Outlet } from "react-router"
import Sidebar from "@/shared/components/Sidebar/Sidebar"

export default function WorkspaceLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}
