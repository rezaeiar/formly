import Logo from '@/shared/components/layout/WorkspaceNavigation/NavigationHeader/Logo'
import Navigation from '@/shared/components/layout/WorkspaceNavigation/Navigation'
import UserProfile from '@/shared/components/layout/WorkspaceNavigation/UserProfile'

export default function WorkspaceNavigation() {
    return (
        <div className='flex flex-col items-center xl:items-start justify-between bg-white border-r border-slate-200 xl:w-62 px-3.5 py-4.5 min-h-screen'>
            <div className="space-y-6 w-full">
                <Logo />
                <Navigation />
            </div>
            <UserProfile />
        </div>
    )
}
