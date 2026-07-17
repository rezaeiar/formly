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
import { ListFilter } from 'lucide-react'

type StatusDropdownProps = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function StatusDropdown({
    value,
    setValue
}: StatusDropdownProps) {
    return (
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
                    <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
                        <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="published">Published</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="draft">Draft</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
