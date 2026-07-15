import Logo from '@/shared/components/Sidebar/Logo'
import SidebarNavigation from '@/shared/components/Sidebar/SidebarNavigation'
import UserProfile from '@/shared/components/Sidebar/UserProfile'

export default function Sidebar() {
    return (
        <div className='flex flex-col items-center xl:items-start justify-between bg-white border-r border-slate-200 xl:w-62 px-3.5 py-4.5 min-h-screen'>
            <div className="space-y-6 w-full">
                <Logo />
                <SidebarNavigation />
            </div>
            <UserProfile />
        </div>
    )
}
