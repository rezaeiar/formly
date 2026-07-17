import EmptyState from "@/features/forms/FormsTableSection/components/table/EmptyState";
import { forms } from "@/features/forms/FormsTableSection/constants";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "@/features/forms/FormsTableSection/components/table/columns";


export default function FormsTable() {
    const table = useReactTable({
        data: forms,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div>
            {forms.length ? (
                <table className="border border-slate-200 rounded-2xl overflow-hidden w-full">
                    <thead>
                        {
                            table.getHeaderGroups().map(headerGroups => (
                                <tr className="py-3 px-4 bg-slate-100 text-slate-500 text-sm *:font-normal">
                                    {
                                        headerGroups.headers.map(header => (
                                            <th
                                                key={header.id}
                                                className={`px-4 py-3 ${header.column.columnDef.meta?.align === "right"
                                                    ? "text-right"
                                                    : "text-left"
                                                    }`}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="bg-white border-b" >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}
                                        className={`px-4 py-3 ${cell.column.columnDef.meta?.align === "right"
                                            ? "flex justify-end"
                                            : ""
                                            }`}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <EmptyState />
            }
        </div>
    )
}
