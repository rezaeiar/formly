import { ClipboardType } from "lucide-react";
import { Link } from "react-router";
import { PATHS } from "@/router/paths";

export default function Logo() {
    return (
        <Link
            to={PATHS.dashboard()}
            className="flex items-center gap-2.5"
        >
            <div className="size-8 rounded-lg bg-blue-600 text-white flex justify-center items-center">
                <ClipboardType size={18} />
            </div>
            <div className="space-y-0.5">
                <p className="text-xs">FORMLY</p>
                <p className="text-xs text-slate-500">Workspace</p>
            </div>
        </Link>
    )
}
