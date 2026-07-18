import type { LucideProps } from "lucide-react"

type ComponentProps = {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    title: string
}

export default function Component({ title, icon }: ComponentProps) {
    const Icon = icon
    return (
        <button className='p-2.5 border cursor-pointer border-slate-200 hover:bg-slate-50 transition-colors rounded-xl flex items-center gap-x-2.5'>
            <Icon size={16} className="text-slate-600" />
            <span className="text-slate-900 text-sm">
                {title}
            </span>
        </button>
    )
}
