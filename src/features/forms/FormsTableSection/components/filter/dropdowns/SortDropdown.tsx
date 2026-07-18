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
import { ChevronDown } from 'lucide-react'

import type { Table } from "@tanstack/react-table";
import type { Form } from "@/features/forms/FormsTableSection/types/form";

type SortDropdownProps = {
  table: Table<Form>;
};
export default function SortDropdown({ table }: SortDropdownProps) {
  const sorting = table.getState().sorting;

  const value =
    sorting.length === 0
      ? "default"
      : sorting[0].id === "form"
      ? "title"
      : sorting[0].id === "updated"
      ? "date"
      : sorting[0].id === "responses"
      ? "responses"
      : "default";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="secondary">
            <ChevronDown size={18} />
            Sort
          </Button>
        }
      />

      <DropdownMenuContent className="w-32" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>

          <DropdownMenuRadioGroup
            value={value}
            onValueChange={(value) => {
              switch (value) {
                case "title":
                  table.setSorting([{ id: "form", desc: false }]);
                  break;

                case "date":
                  table.setSorting([{ id: "updated", desc: true }]);
                  break;

                case "responses":
                  table.setSorting([{ id: "responses", desc: true }]);
                  break;

                default:
                  table.setSorting([]);
              }
            }}
          >
            <DropdownMenuRadioItem value="default">
              Default
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="title">
              Title
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="date">
              Date
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="responses">
              Responses
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}