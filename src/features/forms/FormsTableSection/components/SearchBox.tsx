import { SearchIcon } from "lucide-react"

import {
  Field,
} from "@/shared/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/components/ui/input-group"
import { useState } from "react"

export function SearchBox() {
  const [search, setSearch] = useState("")
  return (
    <Field>
      <InputGroup className="border border-slate-200 bg-slate-100 py-5 px-1 text-slate-500 grow">
        <InputGroupInput
          id="inline-start-input"
          placeholder="Search forms…"
          className="placeholder:text-slate-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-slate-400" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
