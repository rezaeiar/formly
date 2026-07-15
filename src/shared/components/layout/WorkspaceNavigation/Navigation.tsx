import { WORKSPACE_NAVIGATION } from "@/shared/constants/workspace-navigation"
import { NavLink } from "react-router"

export default function Navigation() {
    return (
        <div className='space-y-1 w-full'>
            {
                WORKSPACE_NAVIGATION.map(item => {
                    const Icon = item.icon
                    return (
                        <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                                `p-2.5 flex gap-2.5 items-center rounded-xl text-sm ${isActive ? "bg-blue-50 text-slate-900" : "text-slate-500"}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <Icon
                                        size={18}
                                        className={isActive ? "text-blue-600" : "text-slate-500"}
                                    />
                                    <span className="hidden xl:block">
                                        {item.title}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    )
                })
            }
        </div>
    )
}
