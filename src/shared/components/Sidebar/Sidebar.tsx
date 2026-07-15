import Logo from './Logo'
import SidebarNavigation from './SidebarNavigation'
import UserProfile from './UserProfile'

export default function Sidebar() {
    return (
        <div className='flex flex-col justify-between bg-white border-r border-slate-200 w-62 px-3.5 py-4.5 min-h-screen'>
            <div className="space-y-6">
                <Logo />
                <SidebarNavigation />
            </div>
            <div>
                <UserProfile />
            </div>
        </div>
    )
}
