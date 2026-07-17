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

type SortDropdownProps = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SortDropdown({
    value,
    setValue
}: SortDropdownProps) {
    return (
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
                    <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
                        <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="data">Date</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="responses">Responses</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
