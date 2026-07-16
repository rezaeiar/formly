import { Button } from "@/shared/components/ui/button"
import { Menu, X } from "lucide-react"

type HamburgerMenuProps = {
    open: boolean,
    onToggle: () => void
}

export default function HamburgerMenu({ open, onToggle }: HamburgerMenuProps) {
    return (
        <Button
            variant="icon"
            size="icon"
            onClick={onToggle}
        >
            {open ? <X size={18} /> : <Menu size={18} />}
        </Button>
    )
}
