
import FormFilter from "@/features/forms/FormsTableSection/components/FormFilter";
import FormsTable from "@/features/forms/FormsTableSection/components/FormsTable";
import WorkspaceHeader from "@/shared/components/common/WorkspaceHeader";
import { Button } from "@/shared/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router";

export default function Forms() {
  return (
    <div className="p-4 sm:p-6 xl:p-8 space-y-4 sm:space-y-6">
      <WorkspaceHeader>
        <WorkspaceHeader.Content>
          <h4 className="text-3xl text-slate-900 font-bold">
            Forms
          </h4>
          <p className="text-sm text-slate-500">
            Search, sort, duplicate, rename, and clean up your forms.
          </p>
        </WorkspaceHeader.Content>

        <WorkspaceHeader.SideContent>
          <Button render={<Link to="/builder" />}>
            <PlusCircle />
            Create Form
          </Button>
        </WorkspaceHeader.SideContent>
      </WorkspaceHeader>
      <FormFilter />
      <FormsTable />
    </div>
  )
}
