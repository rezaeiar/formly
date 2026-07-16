import WorkspaceHeader from "@/shared/components/common/WorkspaceHeader";

export default function Settings() {
  return (
    <div className="p-4 sm:p-6 xl:p-8">
          <WorkspaceHeader>
            <WorkspaceHeader.Content>
              <h4 className="text-3xl text-slate-900 font-bold">
                Settings
              </h4>
            </WorkspaceHeader.Content>
          </WorkspaceHeader>
        </div>
  )
}
