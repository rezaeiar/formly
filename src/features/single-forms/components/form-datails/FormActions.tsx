import { Button } from "@/shared/components/ui/button";
import { CloudOff, Copy, Eye, Pencil, Table } from "lucide-react";
import { Link } from "react-router";

export default function FormActions() {
    return (
        <div className="flex items-center flex-col sm:flex-row gap-2.5 bg-white p-4 rounded-2xl border border-slate-200 overflow-auto">
            <Button
                render={<Link to="/" />}
                className={"w-full sm:w-fit!"}
            >
                <Pencil />
                Edit Form
            </Button>
            <Button
                variant="secondary"
                className={"w-full sm:w-fit!"}
                render={<Link to={`/forms/${1}`} />}
            >
                <Eye size={18} />
                Preview
            </Button>
            <Button
                variant="secondary"
                className={"w-full sm:w-fit!"}
                render={<Link to={`/forms/${1}`} />}
            >
                <Table size={18} />
                View Responses
            </Button>
            <Button
                variant="secondary"
                className={"w-full sm:w-fit!"}
                render={<Link to={`/forms/${1}`} />}
            >
                <Copy size={18} />
                Copy Public Link
            </Button>
            <Button
                variant="secondary"
                className={"w-full sm:w-fit!"}
                render={<Link to={`/forms/${1}`} />}
            >
                <CloudOff size={18} />
                Unpublish
            </Button>
        </div>
    )
}
