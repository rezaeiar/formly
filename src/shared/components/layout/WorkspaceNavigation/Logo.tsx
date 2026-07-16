import { ClipboardType } from "lucide-react";
import { Link } from "react-router";
import { PATHS } from "@/router/paths";
import React from "react";

function Logo() {
    console.log("logo");
    
    return (
        <Link
            to={PATHS.dashboard()}
            className="flex items-center gap-2.5 w-full sm:justify-center xl:justify-start"
        >
            <div className="size-9 rounded-lg bg-blue-600 text-white flex justify-center items-center">
                <ClipboardType size={18} />
            </div>
            <div className="space-y-0.5 sm:hidden xl:block">
                <p className="text-xs font-bold">FORMLY</p>
                <p className="text-xs text-slate-500 hidden sm:block">Workspace</p>
            </div>
        </Link>
    )
}
 export default React.memo(Logo)