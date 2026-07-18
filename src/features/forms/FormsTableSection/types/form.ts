export type Form = {
  id: number
  form: string
  description: string
  status: "Published" | "Draft"
  responses: number
  updated: Date
}