import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Firefly Lite",
    description: "Website scraper wrapper using Firecrawl API",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
        </body>
        </html>
    );
}
