import { HashRouter } from "react-router-dom";
import { PrivateRoutes } from "@/routes/PrivateRoutes";
import { PublicRoutes } from "@/routes/PublicRoutes";
import ScrollToTop from "@/modules/shared/components/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { useAuthStore } from "@/modules/auth/stores/useAuthStore";
import axios from "axios";
axios.defaults.withCredentials = true;

const App = () => {
  const { auth } = useAuthStore();
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        {auth ? <PrivateRoutes /> : <PublicRoutes />}
        <Toaster />
      </HashRouter>
    </>
  );
};

export default App;
