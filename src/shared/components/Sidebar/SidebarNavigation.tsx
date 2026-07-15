import { SIDEBAR_NAVIGATION } from "@/shared/constants/sidebar"

export default function SidebarNavigation() {
  return (
    <div className='space-y-1'>
        {
            SIDEBAR_NAVIGATION.map(item => (
                <div className="">
                    {item.title}
                </div>
            ))
        }
    </div>
  )
}
