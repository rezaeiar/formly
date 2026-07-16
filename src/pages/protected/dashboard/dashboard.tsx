import RecentActivity from "@/features/dashboard/recent-activity/RecentActivity";
import RecentForms from "@/features/dashboard/recent-forms-section/RecentForms";
import StatsOverview from "@/features/dashboard/stats-section/StatsOverview";
import WorkspaceHeader from "@/shared/components/common/WorkspaceHeader";
import { Button } from "@/shared/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 xl:p-8 space-y-4 sm:space-y-6">
      <WorkspaceHeader>
        <WorkspaceHeader.Content>
          <h4 className="text-3xl text-slate-900 font-bold">
            Dashboard
          </h4>
          <p className="text-sm text-slate-500">
            A focused overview of your forms, responses, and recent activity.
          </p>
        </WorkspaceHeader.Content>

        <WorkspaceHeader.SideContent>
          <Button render={<Link to="/builder" />}>
            <PlusCircle />
            Create Form
          </Button>
        </WorkspaceHeader.SideContent>
      </WorkspaceHeader>
      <div className="space-y-4">
        <StatsOverview />
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          <RecentForms />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
