import RecentActivityItem from "@/features/dashboard/recent-activity/RecentActivityItem";

export default function RecentActivity() {
  return (
    <div className='bg-white border border-slate-200 rounded-2xl p-4 space-y-3.5 max-h-min'>
      <h3 className="text-slate-900 font-semibold">
        Recent Activity
      </h3>
      <div className="rounded-sm max-h-80 overflow-auto">
        <RecentActivityItem />
        <RecentActivityItem />
      </div>
    </div>
  )
}
