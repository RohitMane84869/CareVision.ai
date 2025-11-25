import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Syringe } from "lucide-react";

const VaccineRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set configuration before loading the script
    (window as any).chtlConfig = { 
      chatbotId: "5781451632", 
      display: "page_inline" 
    };
    
    // Load Chatling script
    const script = document.createElement("script");
    script.async = true;
    script.dataset.id = "5781451632";
    script.dataset.display = "page_inline";
    script.id = "chtl-script";
    script.type = "text/javascript";
    script.src = "https://chatling.ai/js/embed.js";
    
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("chtl-script");
      if (existingScript) {
        existingScript.remove();
      }
      delete (window as any).chtlConfig;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="gradient-green text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex items-center space-x-3">
            <Syringe className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold mb-1">Vaccine Registration</h1>
              <p className="text-white/90">Schedule your vaccination with AI assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
          {/* Chatling bot will be embedded here */}
          <div id="chtl-inline-bot" style={{ width: "100%", height: "500px" }} />
        </div>
      </div>
    </div>
  );
};

export default VaccineRegistration;
