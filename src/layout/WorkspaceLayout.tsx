import { Outlet } from "react-router"
import WorkspaceNavigation from "@/shared/components/layout/WorkspaceNavigation/WorkspaceNavigation"

export default function WorkspaceLayout() {
    return (
        <div className="flex">
            <WorkspaceNavigation />
            <Outlet />
        </div>
    )
}
