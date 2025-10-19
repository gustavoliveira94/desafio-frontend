import React from "react";
import { Header } from "../components";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-8">
      <Header />

      <main>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
          {children}
        </div>
      </main>
    </div>
  );
};
