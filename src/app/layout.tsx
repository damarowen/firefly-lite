import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Firefly Lite",
  description: "Website crawler and viewer powered by Firecrawl API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
