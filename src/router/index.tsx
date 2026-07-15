import {
    createBrowserRouter,
} from "react-router";

import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";

import ProtectedRoute from "./guards/ProtectedRoute";
import GuestRoute from "./guards/GuestRoute";

import Login from "../pages/guest/auth/Login";

import Dashboard from "../pages/protected/dashboard/dashboard";
import Forms from "../pages/protected/forms/Forms";
import SingleForm from "../pages/protected/forms/SingleForm";
import Builder from "../pages/protected/builder/Builder";
import Responses from "../pages/protected/responses/Responses";
import Preview from "../pages/protected/preview/Preview";
import Settings from "../pages/protected/setting/Settings";

import Form from "../pages/public/form/Form";

import NotFound from "../pages/NotFound";

import { ROUTES } from "./paths";
import WorkspaceLayout from "../layout/WorkspaceLayout";

export const router = createBrowserRouter([
    {
        element: <RootLayout />,

        children: [
            {
                path: ROUTES.FORM,
                element: <Form />,
            },
            {
                element: <GuestRoute />,
                children: [
                    {
                        element: <AuthLayout />,

                        children: [
                            {
                                path: ROUTES.LOGIN,
                                element: <Login />,
                            },

                        ],
                    },
                ],
            },

            {
                element: <ProtectedRoute />,

                children: [

                    {
                        element: <WorkspaceLayout />,
                        children: [
                            {
                                index: true,
                                element: <Dashboard />,
                            },

                            {
                                path: ROUTES.FORMS,
                                children: [
                                    {
                                        index: true,
                                        element: <Forms />,
                                    },
                                    {
                                        path: ROUTES.SINGLE_FORM,
                                        element: <SingleForm />,
                                    },
                                    {
                                        path: ROUTES.RESPONSES,
                                        element: <Responses />,
                                    },
                                    {
                                        path: ROUTES.PREVIEW,
                                        element: <Preview />,
                                    },
                                ],
                            },

                            {
                                path: ROUTES.BUILDER,
                                element: <Builder />,
                            },

                            {
                                path: ROUTES.SETTINGS,
                                element: <Settings />,
                            },
                        ]
                    }
                ],
            },

            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);