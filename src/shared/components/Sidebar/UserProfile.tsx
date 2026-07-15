export default function UserProfile() {

    const name = "Mohammad"
    const role = "Owner"
    
    return (
        <div className='border border-slate-200 bg-slate-100 p-2.5 rounded-xl flex items-center gap-2.5'>
            <div className="size-7 bg-slate-300 rounded-full" />
            <div className="space-y-0.5">
                <p className="text-sm">{name}</p>
                <p className="text-sm text-slate-500">{role}</p>
            </div>
        </div>
    )
}
