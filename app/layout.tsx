import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Renata's blog",
  description: "Created by Renata Diurczak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
