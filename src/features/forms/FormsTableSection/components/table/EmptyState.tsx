export default function EmptyState() {
    return (
        <div className="bg-slate-100 border-slate-200 rounded-2xl border border-dashed space-y-2.5 p-6">
            <h3 className="text-slate-900 text-center font-semibold">
                No forms match your filters
            </h3>
            <p className="text-sm text-slate-500 text-center">
                Clear the search or create a new form to get started.
            </p>
        </div>
    )
}
