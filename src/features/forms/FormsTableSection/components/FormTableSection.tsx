import FormFilter from '@/features/forms/FormsTableSection/components/filter/FormFilter'
import FormsTable from '@/features/forms/FormsTableSection/components/table/FormsTable'
import { forms } from '@/features/forms/FormsTableSection/constants';
import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable, type ColumnFiltersState, type SortingState } from '@tanstack/react-table';
import { useState } from 'react';
import { columns } from "@/features/forms/FormsTableSection/components/table/columns";

export default function FormTableSection() {
    const [globalFilter, setGlobalFilter] = useState("");
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);


    const table = useReactTable({
        data: forms,
        columns,

        state: {
            globalFilter,
            sorting,
            columnFilters,
        },

        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,

        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });
    return (
        <>
            <FormFilter table={table} />
            <FormsTable table={table} />
        </>
    );
}