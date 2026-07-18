import EmptyState from "@/features/forms/FormsTableSection/components/table/EmptyState";
import type { Form } from "@/features/forms/FormsTableSection/types/form";
import { flexRender, type Table } from "@tanstack/react-table";

type FormsTableProps = {
    table: Table<Form>;
};

export default function MobileFormTable({ table }: FormsTableProps) {
    return (
        <div className="sm:hidden">
            {
                table.getRowModel().rows.length ? (
                    <div className="space-y-3">
                        {table.getRowModel().rows.map((row) => (
                            <div
                                key={row.id}
                                className="p-3.5 rounded-2xl border border-slate-200 bg-white space-y-3"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <div
                                        key={cell.id}
                                        className="flex justify-between items-center gap-4"
                                    >

                                        <div className="w-full sm:w-auto">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : <EmptyState />
            }
        </div>
    );
}