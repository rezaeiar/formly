import { LayoutDashboard, ClipboardList, PanelLeft } from "lucide-react";
import { PATHS } from "@/router/paths";

export const WORKSPACE_NAVIGATION = [
    {
        title: "Dashboard",
        href: PATHS.dashboard(),
        icon: LayoutDashboard
    },
    {
        title: "Forms",
        href: PATHS.forms(),
        icon: ClipboardList
    },
    {
        title: "Builder",
        href: PATHS.builder(),
        icon: PanelLeft
    },
]