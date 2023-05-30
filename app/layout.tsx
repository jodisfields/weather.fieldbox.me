import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "",
  description: "",
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    creator: "",
  },
  metadataBase: new URL("https://weather.fieldbox.me"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
