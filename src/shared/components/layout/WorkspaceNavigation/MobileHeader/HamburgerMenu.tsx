import { Menu, X } from "lucide-react"

type HamburgerMenuProps = {
    open: boolean,
    onToggle: () => void
}

export default function HamburgerMenu({ open, onToggle }: HamburgerMenuProps) {
    return (
        <button
            className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900"
            onClick={onToggle}
        >
            {open ? <X size={18} /> : <Menu size={18} />}
        </button>
    )
}
