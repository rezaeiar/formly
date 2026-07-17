import SortDropdown from "@/features/forms/FormsTableSection/components/filter/dropdowns/SortDropdown"
import StatusDropdown from "@/features/forms/FormsTableSection/components/filter/dropdowns/StatusDropdown"
import { SearchBox } from "@/features/forms/FormsTableSection/components/filter/SearchBox"
import { useState } from 'react'

export default function FormFilter() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("all")
  const [sort, setSort] = useState("default")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <div className='p-3 rounded-2xl bg-white border border-slate-200 flex items-center gap-3'>
      <SearchBox
        value={search}
        onChange={handleSearch}
      />
      <StatusDropdown
        value={status}
        setValue={setStatus}
      />
      <SortDropdown
        value={sort}
        setValue={setSort}
      />
    </div>
  )
}
