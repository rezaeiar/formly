export type Form = {
    id: string
    title: string
    description: string
    status: "Published" | "Draft"
    responses: number
    updated: Date
}