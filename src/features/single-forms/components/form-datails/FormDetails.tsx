import FormActions from "@/features/single-forms/components/form-datails/FormActions";

const details = [
    {
        label: "Created",
        value: "18 July 2026",
    },
    {
        label: "Last updated",
        value: "18 July 2026",
    },
    {
        label: "Responses",
        value: "124",
    },
    {
        label: "Public URL",
        value: "https://example.com/forms/contact",
    },
];

export default function FormDetails() {
    return (
        <section className="space-y-2.5 sm:space-y-6">
            <div
                className='grid sm:grid-cols-2 gap-y-4 xl:grid-cols-4 bg-white p-4 rounded-2xl border border-slate-200'
            >
                {
                    details.map(detail => (
                        <div className="text-sm text-slate-500">
                            <h6>
                                {detail.label}
                            </h6>
                            <p className="line-clamp-1">
                                {detail.value}
                            </p>
                        </div>
                    ))
                }
            </div>
            <FormActions />
        </section>
    )
}
