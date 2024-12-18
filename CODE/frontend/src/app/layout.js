import "./globals.css";
import MainLayout from "@/layout/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <MainLayout>{children}</MainLayout>
        <ToastContainer />
      </body>
    </html>
  );
}
