import type { Form } from "@/features/forms/FormsTableSection/types/form";
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
import type { Table } from "@tanstack/react-table";
import { ListFilter } from 'lucide-react'


type StatusDropdownProps = {
  table: Table<Form>;
};
export default function StatusDropdown({ table }: StatusDropdownProps) {
  const value =
    (table.getColumn("status")?.getFilterValue() as string | undefined) ??
    "all";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
           variant="secondary"
           className={"w-full sm:w-auto"}
          >
            <ListFilter size={18} />
            Status
          </Button>
        }
      />

      <DropdownMenuContent className="w-32" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Form status</DropdownMenuLabel>

          <DropdownMenuRadioGroup
            value={value}
            onValueChange={(value) => {
              table
                .getColumn("status")
                ?.setFilterValue(value === "all" ? undefined : value);
            }}
          >
            <DropdownMenuRadioItem value="all">
              All
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="Published">
              Published
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="Draft">
              Draft
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
