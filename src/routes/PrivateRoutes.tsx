import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "@/modules/shared/pages/NotFound";
import { Home } from "@/modules/home/pages/Home";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Defaults Routes */}
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
