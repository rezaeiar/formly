import FormDetails from "@/features/single-forms/components/form-datails/FormDetails";
import FormStats from "@/features/single-forms/components/form-stats/FormStats";
import FormState from "@/shared/components/common/FormState";
import WorkspaceHeader from "@/shared/components/common/WorkspaceHeader";
import { useParams } from "react-router";

export default function SingleForm() {

  const { id } = useParams()

  return (
    <div className="p-4 sm:p-6 xl:p-8 space-y-4 sm:space-y-6">
      <WorkspaceHeader>
        <WorkspaceHeader.Content>
          <h4 className="text-3xl text-slate-900 font-bold">
            {id}
          </h4>
          <p className="text-sm text-slate-500">
            Collect product feedback from recent customers and measure completion quality.
          </p>
        </WorkspaceHeader.Content>
        <WorkspaceHeader.SideContent>
          <FormState state="Published" />
        </WorkspaceHeader.SideContent>
      </WorkspaceHeader>
      <FormDetails />
      <FormStats />
    </div>
  )
}
