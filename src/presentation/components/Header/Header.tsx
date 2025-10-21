import React from "react";
import { YoutubeLogo } from "@/presentation/assets/YoutubeLogo";
import { Search } from "@/presentation/components";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header
      data-testid="header"
      className="flex items-center gap-[12px] sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 pt-[12px] pb-[12px]"
    >
      <div className="flex items-center">
        <Link to="/">
          <YoutubeLogo />
        </Link>
      </div>
      <Search />
    </header>
  );
};
