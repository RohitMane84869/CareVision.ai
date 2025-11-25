import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Splash from "./pages/Splash.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import GovernmentSchemes from "./pages/GovernmentSchemes.jsx";
import DiseaseAlert from "./pages/DiseaseAlert.jsx";
import VaccineRegistration from "./pages/VaccineRegistration.jsx";
import AIChatbot from "./pages/AIChatbot.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/schemes" element={<ProtectedRoute><GovernmentSchemes /></ProtectedRoute>} />
          <Route path="/alerts" element={<ProtectedRoute><DiseaseAlert /></ProtectedRoute>} />
          <Route path="/vaccine" element={<ProtectedRoute><VaccineRegistration /></ProtectedRoute>} />
          <Route path="/chatbot" element={<ProtectedRoute><AIChatbot /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
