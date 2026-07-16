import React from "react"

type WorkspaceHeaderProps = {
    children: React.ReactNode
}

function WorkspaceHeaderContent({ children }: WorkspaceHeaderProps) {
    return (
        <div className="space-y-2">
            {children}
        </div>
    )
}

function WorkspaceHeaderSideContent({ children }: WorkspaceHeaderProps) {
    return (
        <div className="shrink-0">
            {children}
        </div>
    )
}

const WorkspaceHeader = ({ children }: WorkspaceHeaderProps) => {
    return (
        <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-x-4 gap-y-3">
            {children}
        </div>
    )
}

WorkspaceHeader.Content = WorkspaceHeaderContent
WorkspaceHeader.SideContent = WorkspaceHeaderSideContent


export default WorkspaceHeader