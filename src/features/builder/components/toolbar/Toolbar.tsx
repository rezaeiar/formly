import { Button } from "@/shared/components/ui/button";
import { CloudUpload, Eye, Redo, Save, Undo } from "lucide-react";

export default function Toolbar() {
    return (
        <div
            className="py-4 px-5 bg-white flex justify-between items-center border-b border-slate-200"
        >
            <h3 className="text-slate-900 font-semibold">
                Builder
            </h3>
            <div className="flex items-center gap-x-2.5">
                <Button
                    variant="ghost"
                >
                    <Undo size={18} />
                    Undo
                </Button>
                <Button
                    variant="ghost"
                >
                    <Redo size={18} />
                    Redo
                </Button>
                <Button
                    variant="secondary"
                >
                    <Save size={18} />
                    Save
                </Button>
                <Button
                    variant="secondary"
                >
                    <Eye size={18} />
                    Preview
                </Button>
                <Button>
                    <CloudUpload size={18} />
                    Publish
                </Button>
            </div>
        </div>
    )
}
