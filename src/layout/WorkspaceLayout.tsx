import { Outlet } from "react-router"
import WorkspaceNavigation from "@/shared/components/layout/WorkspaceNavigation/WorkspaceNavigation"

export default function WorkspaceLayout() {
    return (
        <div className="flex flex-col sm:flex-row">
            <WorkspaceNavigation />
            <div className="pt-16 sm:pt-0">
                <Outlet />
            </div>
        </div>
    )
}
