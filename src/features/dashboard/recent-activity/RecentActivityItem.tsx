import FormState from "@/shared/components/common/FormState"
import { Code2 } from "lucide-react"

export default function RecentActivityItem() {
    return (
        <div
            className="flex gap-x-3 justify-between py-3 border-b last:border-none border-slate-200"
        >
            <div className="size-9 rounded-lg text-blue-600 bg-blue-50 flex justify-center items-center shrink-0">
                <Code2 size={18} />
            </div>
            <div className="space-y-1 w-full">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-900">
                        12 new responses
                    </p>
                    <FormState state="Published" />
                </div>
                <p className="text-slate-500 text-sm line-clamp-2">
                    A draft form was updated with a new email field and help text.
                </p>
                <span className="text-slate-500 text-sm">
                    1 hour ago
                </span>
            </div>
        </div>
    )
}
