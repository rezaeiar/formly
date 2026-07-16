import Logo from '@/shared/components/layout/WorkspaceNavigation/Logo'
import HamburgerMenu from '@/shared/components/layout/WorkspaceNavigation/MobileHeader/HamburgerMenu'
import MobileNavigation from '@/shared/components/layout/WorkspaceNavigation/MobileHeader/MobileNavigation'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export default function MobileHeader() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const location = useLocation()
    useEffect(() => {
        setIsOpenMenu(false)
    }, [location.pathname])

    const handleToggleMenuVisibility = () => setIsOpenMenu(prev => !prev)
    return (
        <div className="fixed shrink-0 top-0 left-0 w-full sm:hidden z-50">
            <div className="w-full p-3 bg-white items-center justify-between flex relative z-30 border-b border-slate-200">
                <Logo />
                <HamburgerMenu open={isOpenMenu} onToggle={handleToggleMenuVisibility} />
            </div>
            <div
                className={`absolute top-full w-full transition-transform duration-300 z-20 ${isOpenMenu ? "translate-y-0" : "-translate-y-full"}`}
            >
                <MobileNavigation />
            </div>
            <div
                className={`fixed inset-0 bg-black/10 transition-all ${isOpenMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={handleToggleMenuVisibility}
            />
        </div>
    )
}
