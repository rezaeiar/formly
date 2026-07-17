import EmptyState from "@/features/forms/FormsTableSection/components/table/EmptyState";
import { forms } from "@/features/forms/FormsTableSection/constants";
import FormState from "@/shared/components/common/FormState";
import { Button } from "@/shared/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function FormsTable() {
    return (
        <div>
            {forms.length ? (
                <table
                    className="border border-slate-200 rounded-2xl overflow-hidden block"
                >
                    <thead>
                        <tr
                            className="py-3 px-4 block bg-slate-100 text-slate-500 text-sm *:font-normal"
                        >
                            <th>
                                Form
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Responses
                            </th>
                            <th>
                                Updated
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className="p-4 block bg-white text-sm border-b border-slate-200 last:border-none"
                        >
                            <td>
                                <div className="space-y-1">
                                    <h2 className="text-sm text-slate-900">
                                        Customer feedback
                                    </h2>
                                    <p className="text-slate-500">
                                        Collect product feedback from recent customers.
                                    </p>
                                </div>
                            </td>
                            <td>
                                <FormState state="Draft" />
                            </td>
                            <td>
                                <span className="text-slate-900">
                                    482
                                </span>
                            </td>
                            <td>
                                <span className="text-slate-500">
                                    Today
                                </span>
                            </td>
                            <td>
                                <Button
                                    variant="secondary"
                                >
                                    <ExternalLink size={18} />
                                    Open
                                </Button>
                            </td>
                        </tr>
                        <tr
                            className="p-4 block bg-white text-sm border-b border-slate-200 last:border-none"
                        >
                            <td>
                                <div className="space-y-1">
                                    <h2 className="text-sm text-slate-900">
                                        Customer feedback
                                    </h2>
                                    <p className="text-slate-500">
                                        Collect product feedback from recent customers.
                                    </p>
                                </div>
                            </td>
                            <td>
                                <FormState state="Draft" />
                            </td>
                            <td>
                                <span className="text-slate-900">
                                    482
                                </span>
                            </td>
                            <td>
                                <span className="text-slate-500">
                                    Today
                                </span>
                            </td>
                            <td>
                                <Button
                                    variant="secondary"
                                >
                                    <ExternalLink size={18} />
                                    Open
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : <EmptyState />
            }
        </div>
    )
}
