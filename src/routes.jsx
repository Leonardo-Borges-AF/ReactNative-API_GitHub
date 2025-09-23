import React from "react";
import { Routes, Route } from "react-router-dom";
import RepositoriesPage from "./pages/RepositoriesPage";
import MainPage from "./pages/Main";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/repositories" element={<RepositoriesPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
