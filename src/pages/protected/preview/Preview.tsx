import WorkspaceHeader from "@/shared/components/common/WorkspaceHeader";

export default function Preview() {
  return (
    <div className="p-4 sm:p-6 xl:p-8">
      <WorkspaceHeader>
        <WorkspaceHeader.Content>
          <h4 className="text-3xl text-slate-900 font-bold">
            Preview
          </h4>
          <p className="text-sm text-slate-500">
            Check how the form appears before publishing.
          </p>
        </WorkspaceHeader.Content>
      </WorkspaceHeader>
    </div>
  )
}
