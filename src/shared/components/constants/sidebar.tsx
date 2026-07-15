import { LayoutDashboard, ClipboardList, PanelLeft, Settings } from "lucide-react";
import { PATHS } from "../../../router/paths";

export const SIDEBAR_NAVIGATION = [
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
    {
        title: "Settings",
        href: PATHS.builder(),
        icon: Settings
    },
]