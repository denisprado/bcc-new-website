import Footer from "@components/Footer";
import { ReactNode } from "react";
import Contact from "@components/Contact";
import Box from "@components/Box";
import ClientHeader from "@components/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ClientHeader />
      {children}
      <Box className="w-full px-4" color="neutral">
        <Contact />
      </Box>
      <Footer />
    </div>
  );
}
