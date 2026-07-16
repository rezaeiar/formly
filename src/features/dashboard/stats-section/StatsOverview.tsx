import StatCard from "@/features/dashboard/stats-section/StatCard"

export default function StatsOverview() {

    const stats = [
        {
            id: crypto.randomUUID(),
            title: "Total Forms",
            stat: "24",
            description: "5 Published"
        },
        {
            id: crypto.randomUUID(),
            title: "Total Responses",
            stat: "434",
            description: "142 this week"
        },
        {
            id: crypto.randomUUID(),
            title: "Completion Rate",
            stat: "24%",
            description: "Across active forms"
        },
        {
            id: crypto.randomUUID(),
            title: "Draft Forms",
            stat: "45",
            description: "Ready to review"
        },
    ]
    return (
        <div className="grid sm:grid-cols-4 items-center gap-3 xl:gap-4">
            {
                stats.map(stat => (
                    <StatCard
                        key={stat.id}
                        title={stat.title}
                        stat={stat.stat}
                        description={stat.description}
                    />
                ))
            }
        </div>
    )
}
