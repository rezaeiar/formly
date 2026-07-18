import StatCard from "@/shared/components/common/StatCard"

export default function FormStats() {

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
    ]
    return (
        <div className="grid sm:grid-cols-3 items-center gap-3 xl:gap-4">
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
