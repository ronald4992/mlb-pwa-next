import "./globals.css";
import Link from "next/link";
import SWRegistration from "./SWRegistration";

export const metadata = {
  title: "Baseball League",
  description: "Aplicación de béisbol con trivia",
  manifest: "/manifest,json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav className="navbar">
          <div className="logo">
            ⚾ Baseball League
          </div>

          <div className="nav-links">
            <Link href="/">Inicio</Link>
            <Link href="/trivia">Trivia</Link>
          </div>
        </nav>

        {children}

        <SWRegistration />
      </body>
    </html>
  );
}