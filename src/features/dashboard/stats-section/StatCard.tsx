type StatCardProps = {
    title: string,
    stat: string,
    description: string
}

export default function StatCard({ title, stat, description }: StatCardProps) {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-3 xl:p-4.5 space-y-2.5 xl:space-y-3.5 flex flex-col">
            <h6 className="text-sm sm:text-xs xl:text-sm text-slate-500">
                {title}
            </h6>
            <span className="text-slate-900 text-3xl sm:text-2xl xl:text-3xl">
                {stat}
            </span>
            <p className="text-slate-500 text-sm sm:text-[10px] xl:text-sm">
                {description}
            </p>
        </div>
    )
}
