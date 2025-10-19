import React from "react";
import { YoutubeLogo } from "@/presentation/assets/YoutubeLogo";
import { Search } from "@/presentation/components";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center gap-[12px] sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 pt-[12px] pb-[12px]">
      <div className="flex items-center">
        <YoutubeLogo />
      </div>
      <Search />
    </header>
  );
};
