import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Studio Digitale | Creiamo Esperienze Web Straordinarie",
    description: "Agenzia digitale specializzata nella creazione di siti web, e-commerce, web app e strategie digitali per aziende che vogliono distinguersi.",
    keywords: "web agency, siti web, e-commerce, web app, design, sviluppo, Next.js, React",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="it" className="dark">
                <body className="bg-primary text-white antialiased">
                  {children}
                </body>body>
          </html>html>
        );
}</html>
