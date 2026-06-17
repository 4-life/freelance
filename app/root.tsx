import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Toaster } from "sonner";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", sizes: "96x96",  href: "/images/app-icon/favicon-96x96.png" },
  { rel: "icon", type: "image/png", sizes: "32x32",  href: "/images/app-icon/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16",  href: "/images/app-icon/favicon-16x16.png" },
  { rel: "apple-touch-icon", sizes: "57x57",   href: "/images/app-icon/apple-icon-57x57.png" },
  { rel: "apple-touch-icon", sizes: "60x60",   href: "/images/app-icon/apple-icon-60x60.png" },
  { rel: "apple-touch-icon", sizes: "72x72",   href: "/images/app-icon/apple-icon-72x72.png" },
  { rel: "apple-touch-icon", sizes: "76x76",   href: "/images/app-icon/apple-icon-76x76.png" },
  { rel: "apple-touch-icon", sizes: "114x114", href: "/images/app-icon/apple-icon-114x114.png" },
  { rel: "apple-touch-icon", sizes: "120x120", href: "/images/app-icon/apple-icon-120x120.png" },
  { rel: "apple-touch-icon", sizes: "144x144", href: "/images/app-icon/apple-icon-144x144.png" },
  { rel: "apple-touch-icon", sizes: "152x152", href: "/images/app-icon/apple-icon-152x152.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/images/app-icon/apple-icon-180x180.png" },
  { rel: "manifest", href: "/manifest.json" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-150x150.png" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
