import { Login } from "@/modules/auth/pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
