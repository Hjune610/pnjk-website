// src/components/Layout.tsx
import React from "react";
import Navbar from "./Navbar"; // ✅ Relative path

type LayoutProps = {
  children: React.ReactNode;
  backgroundImage?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundImage = "/chicago1.jpg",
}) => {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 text-white p-8 sm:p-20">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <main className="pt-32">{children}</main>
          <footer className="text-sm text-gray-300 text-center mt-10">
            © Copyright 2014 PNJK Partners, LLP. All Rights Reserved.
            Main office locations: Chicago (IL) | Houston (TX)
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
