import "./globals.css";

export const metadata = {
  title: "Student Card",
  description: "Simple Student Card app built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
