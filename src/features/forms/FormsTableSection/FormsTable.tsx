import FormState from "@/shared/components/common/FormState";
import { Button } from "@/shared/components/ui/button";
import { ExternalLink } from "lucide-react";

type Form = {
    form: string;
    description: string;
    status: string;
    responses: number;
    updated: Date;
};

const forms: Form[] = [
    {
        form: "Customer Feedback Form",
        description: "Collect feedback from customers about their experience.",
        status: "Published",
        responses: 245,
        updated: new Date("2026-07-15"),
    },
    {
        form: "Employee Satisfaction Survey",
        description: "Survey to measure employee satisfaction and engagement.",
        status: "Draft",
        responses: 0,
        updated: new Date("2026-07-10"),
    },
    {
        form: "Event Registration Form",
        description: "Registration form for upcoming company events.",
        status: "Published",
        responses: 128,
        updated: new Date("2026-07-12"),
    },
    {
        form: "Product Research Questionnaire",
        description: "Gather insights about new product ideas.",
        status: "Draft",
        responses: 0,
        updated: new Date("2026-07-08"),
    },
    {
        form: "Newsletter Signup Form",
        description: "Collect emails from users interested in updates.",
        status: "Published",
        responses: 532,
        updated: new Date("2026-07-16"),
    },
];

export default function FormsTable() {
    return (
        <div>
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
            <div className="bg-slate-100 border-slate-200 rounded-2xl border border-dashed space-y-2.5 p-6">
                <h3 className="text-slate-900 text-center font-semibold">
                    No forms match your filters
                </h3>
                <p className="text-sm text-slate-500 text-center">
                    Clear the search or create a new form to get started.
                </p>
            </div>
        </div>
    )
}
