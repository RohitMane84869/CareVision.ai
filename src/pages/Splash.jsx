import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Eye, Activity } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
      if (hasSeenOnboarding) {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        navigate(isAuthenticated ? "/dashboard" : "/login");
      } else {
        navigate("/onboarding");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen gradient-blue-teal flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Animated logo */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-pulse-slow">
              <Heart className="w-16 h-16 text-white" fill="white" />
            </div>
            <div className="animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
              <Eye className="w-16 h-16 text-white" />
            </div>
            <div className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
              <Activity className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* App name */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2">CareVision</h1>
          <p className="text-xl text-white/90">Smart Healthcare Companion</p>
        </div>

        {/* Loading dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};

export default Splash;
