import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", background: "#f0f0f0" }}>
          <h1>My Next.js App</h1>
        </header>
        <main>{children}</main>
        <footer style={{ padding: "1rem", background: "#f0f0f0", marginTop: "2rem" }}>
          <p>&copy; 2025 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
