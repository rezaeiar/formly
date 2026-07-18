import type { FormStateType } from "@/types/form.types"

type FormStateProps = {
    state: FormStateType
}

export default function FormState({ state }: FormStateProps) {
    const colorClasses = state === "Draft" ? "text-slate-500 bg-slate-100" : "text-blue-600 bg-blue-100"
    return (
        <div className={`py-1 px-2 rounded-full border border-slate-200 text-xs justify-center flex ${colorClasses}`}>
            {state}
        </div>
    )
}
