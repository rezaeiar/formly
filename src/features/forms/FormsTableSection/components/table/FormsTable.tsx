import EmptyState from "@/features/forms/FormsTableSection/components/table/EmptyState";
import { flexRender, type Table } from "@tanstack/react-table";
import type { Form } from "@/features/forms/FormsTableSection/types/form";
type Props = {
    table: Table<Form>;
};

export default function FormsTable({ table }: Props) {
    return (
        <div>
            {table.getRowModel().rows.length ? (
                <table className="border border-slate-200 rounded-2xl overflow-hidden w-full">
                    <thead>
                        {
                            table.getHeaderGroups().map(headerGroups => (
                                <tr className="py-3 px-4 bg-slate-100 text-slate-500 text-sm *:font-normal">
                                    {
                                        headerGroups.headers.map(header => (
                                            <th
                                                key={header.id}
                                                style={{ width: header.getSize() }}
                                                className={`px-4 py-3 text-left`}
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
                                    <td
                                        key={cell.id}
                                        style={{ width: cell.column.getSize() }}
                                        className={`px-4 py-3`}
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
