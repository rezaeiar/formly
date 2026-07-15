export const ROUTES = {
  DASHBOARD: "/",

  FORMS: "/forms",
  SINGLE_FORM: ":id",
  RESPONSES: ":id/responses",
  PREVIEW: ":id/preview",

  BUILDER: "/builder",
  SETTINGS: "/settings",

  LOGIN: "/login",

  FORM: "/form/:id",
} as const;

export const PATHS = {
  dashboard: () => "/",

  forms: () => "/forms",

  singleForm: (id: string | number) => `/forms/${id}`,

  responses: (id: string | number) => `/forms/${id}/responses`,

  preview: (id: string | number) => `/forms/${id}/preview`,

  builder: () => "/builder",

  settings: () => "/settings",

  login: () => "/login",

  form: (id: string | number) => `/form/${id}`,
};