import { SearchIcon } from "lucide-react"

import {
  Field,
} from "@/shared/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/components/ui/input-group"

type SearchBoxProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void
}

export function SearchBox({ value, onChange }: SearchBoxProps) {

  return (
    <Field>
      <InputGroup className="border border-slate-200 bg-slate-100 py-5 px-1 text-slate-500 grow">
        <InputGroupInput
          id="inline-start-input"
          placeholder="Search forms…"
          className="placeholder:text-slate-400"
          value={value}
          onChange={onChange}
        />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-slate-400" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
