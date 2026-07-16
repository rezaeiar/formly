import { PATHS } from "@/router/paths"
import FormState from "@/shared/components/common/FormState"
import type { FormStateType } from "@/types/form.types"
import { Link } from "react-router"

type RecentFormItemProps = {
  title: string,
  state: FormStateType,
  href: string
}

export default function RecentFormItem({ title, state, href }: RecentFormItemProps) {
  return (
    <Link
      className="flex justify-between items-center px-3 py-3 border-b last:border-none border-slate-200 hover:bg-slate-50 transition-colors"
      to={PATHS.singleForm(href)}
    >
      <p className="text-sm text-slate-900">
        {title}
      </p>
      <FormState state={state} />
    </Link>
  )
}
