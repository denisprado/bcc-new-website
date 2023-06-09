import Footer from "@components/Footer";
import { ReactNode } from "react";
import Contact from "@components/Contact";
import Box from "@components/Box";
import ClientHeader from "../ClientHeader";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  hasContactForm?: boolean;
}

export default function Layout({
  children,
  hasContactForm = false,
}: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full page">
      <ClientHeader />
      <motion.div
        className="w-full"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 3,
        }}
      >
        {children}
      </motion.div>
      {hasContactForm && (
        <Box className="w-full px-4" color="neutral">
          <Contact />
        </Box>
      )}
      <Footer />
    </div>
  );
}
