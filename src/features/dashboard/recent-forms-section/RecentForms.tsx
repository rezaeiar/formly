import RecentFormItem from "@/features/dashboard/recent-forms-section/RecentFormItem"
import type { FormStateType } from "@/types/form.types"
import { useState } from "react"

export default function RecentForms() {

  const [forms] = useState<{
    id: number,
    title: string,
    state: FormStateType,
    href: string
  }[]>([
    {
      id: 1,
      title: "Login Form",
      state: "Published",
      href: "login-form"
    },
    {
      id: 2,
      title: "Confirm Form",
      state: "Draft",
      href: "confirm-form"
    },
    {
      id: 3,
      title: "Absolute Form",
      state: "Draft",
      href: "absolute-form"
    },
  ])
  return (
    <div className='bg-white border border-slate-200 rounded-2xl p-4 space-y-3.5 max-h-min'>
      <h3 className="text-slate-900 font-semibold">
        Recent forms
      </h3>
      <div className="rounded-sm max-h-80 overflow-auto">
        {forms.map(form => (
          <RecentFormItem
            key={form.id}
            title={form.title}
            state={form.state}
            href={form.href}
          />
        ))}
      </div>
    </div>
  )
}
