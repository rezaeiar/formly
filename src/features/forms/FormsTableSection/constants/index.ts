import { type Form } from "@/features/forms/FormsTableSection/types/form"

export const forms: Form[] = [
    {
        id: 1,
        form: "Customer Feedback Form",
        description: "Collect feedback from customers about their experience.",
        status: "Published",
        responses: 245,
        updated: new Date("2026-07-15"),
    },
    {
        id: 2,
        form: "Employee Satisfaction Survey",
        description: "Survey to measure employee satisfaction and engagement.",
        status: "Draft",
        responses: 0,
        updated: new Date("2026-07-10"),
    },
    {
        id: 3,
        form: "Event Registration Form",
        description: "Registration form for upcoming company events.",
        status: "Published",
        responses: 128,
        updated: new Date("2026-07-12"),
    },
]