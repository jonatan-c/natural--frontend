import { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Poke-Natural",
  description: "Explore the world of Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col items-center justify-between p-4 pt-0 lg:p-12">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
