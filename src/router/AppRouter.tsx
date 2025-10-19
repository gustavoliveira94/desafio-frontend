import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "@/presentation/layout/Layout";
import { HomePage, SearchPage } from "@/presentation/views";
import { ROUTES } from "../core/utils/routes";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
