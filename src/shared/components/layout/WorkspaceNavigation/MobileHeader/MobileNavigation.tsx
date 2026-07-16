import { WORKSPACE_NAVIGATION } from '@/shared/constants/workspace-navigation'
import React from 'react';
import { NavLink } from 'react-router'

function MobileNavigation() {
    console.log("mobile navigati");
    
    return (
        <div className='space-y-1 w-full px-3 bg-white border-b border-slate-200 py-4'>
            {
                WORKSPACE_NAVIGATION.map(item => {
                    const Icon = item.icon
                    return (
                        <NavLink
                            key={item.title}
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
                                    <span>
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
export default React.memo(MobileNavigation)