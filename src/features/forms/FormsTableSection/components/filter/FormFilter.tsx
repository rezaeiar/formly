import SortDropdown from "@/features/forms/FormsTableSection/components/filter/dropdowns/SortDropdown"
import StatusDropdown from "@/features/forms/FormsTableSection/components/filter/dropdowns/StatusDropdown"
import { SearchBox } from "@/features/forms/FormsTableSection/components/filter/SearchBox"
import type { Form } from "@/features/forms/FormsTableSection/types/form";
import type { Table } from "@tanstack/react-table";

type Props = {
  table: Table<Form>;
};

export default function FormFilter({ table }: Props) {
  return (
    <div className='p-3 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center gap-3'>
      <SearchBox
        value={table.getState().globalFilter ?? ""}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
      />

      <StatusDropdown table={table} />

      <SortDropdown table={table} />
    </div>
  )
}
