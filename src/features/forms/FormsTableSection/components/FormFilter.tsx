import { SearchBox } from "@/features/forms/FormsTableSection/components/SearchBox"
import { Button } from "@/shared/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"
import { ChevronDown, ListFilter } from 'lucide-react'
import { useState } from 'react'

export default function FormFilter() {
  const [position, setPosition] = useState("bottom")
  return (
    <div className='p-3 rounded-2xl bg-white border border-slate-200 flex items-center gap-3'>
      <SearchBox />
      <DropdownMenu>
        <DropdownMenuTrigger render={(
          <Button
            variant="secondary"
          >
            <ListFilter size={18} />
            Status
          </Button>
        )} />
        <DropdownMenuContent className="w-32" align='start'>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Form status</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="top">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Published</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Draft</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger render={(
          <Button
            variant="secondary"
          >
            <ChevronDown size={18} />
            Sort
          </Button>
        )} />
        <DropdownMenuContent className="w-32" align='end'>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="top">Title</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Date</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Responses</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}
