import type { Form } from "@/features/forms/FormsTableSection/types/form";
import FormState from "@/shared/components/common/FormState";
import { Button } from "@/shared/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";

export const columns: ColumnDef<Form>[] = [
    {
        accessorKey: "form",
        header: "Form",
        enableGlobalFilter: true,
        size: 320,
        minSize: 320,
        maxSize: 500,
        cell: ({ row }) => (
            <div className="space-y-1">
                <h2 className="text-sm text-slate-900 line-clamp-1 text-start">
                    {row.original.form}
                </h2>

                <p className="text-sm text-slate-500 line-clamp-2 text-start">
                    {row.original.description}
                </p>
            </div>
        ),
    },

    {
        accessorKey: "status",
        header: "Status",
        enableGlobalFilter: true,
        cell: ({ row }) => (
            <FormState state={row.original.status} />
        ),
    },

    {
        accessorKey: "responses",
        header: "Responses",
        cell: ({ row }) => (
            <span className="text-slate-900 text-sm">
                {row.original.responses}
            </span>
        ),
    },

    {
        accessorKey: "updated",
        header: "Updated",
        cell: ({ row }) => {
            const date = row.original.updated;

            const dataString = new Intl.DateTimeFormat("en-GB", {
                day: "numeric",
                month: "long",
            }).format(date);

            return (
                <span className="text-slate-500">
                    {dataString}
                </span>
            )
        },
    },

    {
        id: "actions",
        accessorKey: "id",
        header: "Action",
        cell: ({ row }) => {

            return (

                <Button
                    variant="secondary"
                    className={"w-full! sm:w-fit!"}
                    render={<Link to={`/forms/${row.original.form}`} />}
                >
                    <ExternalLink size={18} />
                    Open
                </Button>
            )
        },
    },
];