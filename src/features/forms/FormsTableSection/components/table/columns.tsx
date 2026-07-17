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
        cell: ({ row }) => (
            <div className="space-y-1">
                <h2 className="text-sm text-slate-900">
                    {row.original.form}
                </h2>

                <p className="text-sm text-slate-500">
                    {row.original.description}
                </p>
            </div>
        ),
    },

    {
        accessorKey: "status",
        header: "Status",
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
        meta: {
            align: "right",
        },
        header: "Action",
        cell: ({ getValue }) => {
            const id = getValue();

            return (

                <Button
                    variant="secondary"
                    render={<Link to={`/forms/${id}`} />}
                >
                    <ExternalLink size={18} />
                    Open
                </Button>
            )
        },
    },
];