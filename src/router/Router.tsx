import { RouteObject, Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { RouterPaths } from "@/router/router-path.const.ts";

import { NotFoundPage } from "@/pages/not-found/NotFoundPage.tsx";
import { ErrorPage } from "@/pages/error/ErrorPage.tsx";
import { CocktailPage } from "@/pages/cocktail/CocktailPage.tsx";

import { DefaultLayout } from "@/layouts/default-layout/DefaultLayout.tsx";

const routers: RouteObject[] = [
  {
    errorElement: <ErrorPage />,
    children: [
      {
        element: (
          <ErrorBoundary
            FallbackComponent={() => <ErrorPage />}
            onError={(error) => console.error(error)}
          >
            <DefaultLayout>
              <CocktailPage />
            </DefaultLayout>
          </ErrorBoundary>
        ),
        path: RouterPaths.INDEX.PATH,
      },
      {
        element: <NotFoundPage />,
        path: "*",
      },
      {
        element: <Navigate replace to={RouterPaths.MARGARITA.PATH} />,
        path: "/",
      },
    ],
  },
];

export const router = createBrowserRouter(routers);
