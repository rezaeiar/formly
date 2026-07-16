export default function UserProfile() {

    const name = "Mohammad"
    const role = "Owner"

    return (
        <div className='xl:border border-slate-200 xl:bg-slate-100 xl:p-2.5 rounded-xl flex items-center justify-center xl:justify-start gap-2.5 w-full'>
            <div className="size-8 bg-slate-300 rounded-full" />
            <div className="space-y-0.5 hidden xl:block">
                <p className="text-xs">{name}</p>
                <p className="text-xs text-slate-500">{role}</p>
            </div>
        </div>
    )
}
