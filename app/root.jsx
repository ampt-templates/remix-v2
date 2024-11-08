import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";

const favicon = {
  rel: "icon",
  href: "/favicon.ico",
  type: "image/x-icon",
};

export const links = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }, favicon]
    : [favicon]),
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
