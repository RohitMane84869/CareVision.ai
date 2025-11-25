import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Bot, Activity, Heart, Stethoscope } from "lucide-react";

const AIChatbot = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Chatbase with proxy pattern
    (function() {
      if (!(window as any).chatbase || (window as any).chatbase("getState") !== "initialized") {
        (window as any).chatbase = (...args: any[]) => {
          if (!(window as any).chatbase.q) {
            (window as any).chatbase.q = [];
          }
          (window as any).chatbase.q.push(args);
        };
        (window as any).chatbase = new Proxy((window as any).chatbase, {
          get(target: any, prop: string) {
            if (prop === "q") {
              return target.q;
            }
            return (...args: any[]) => target(prop, ...args);
          }
        });
      }
      
      const onLoad = function() {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "Hvb0gl8-PjtpkMaZngrxA";
        script.setAttribute("domain", "www.chatbase.co");
        script.onload = () => setIsLoading(false);
        document.body.appendChild(script);
      };
      
      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    })();

    return () => {
      const existingScript = document.getElementById("Hvb0gl8-PjtpkMaZngrxA");
      if (existingScript) {
        existingScript.remove();
      }
      delete (window as any).chatbase;
    };
  }, []);

  const quickActions = [
    {
      title: "Ask About Symptoms",
      description: "Describe your symptoms and get guidance",
      icon: Activity,
      gradient: "gradient-orange-red",
    },
    {
      title: "Health Tips",
      description: "Get personalized health advice",
      icon: Heart,
      gradient: "gradient-green",
    },
    {
      title: "Medical Information",
      description: "Learn about diseases and treatments",
      icon: Stethoscope,
      gradient: "gradient-blue-teal",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="gradient-purple-pink text-white p-6">
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
            <Bot className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold mb-1">AI Health Assistant</h1>
              <p className="text-white/90">Your 24/7 healthcare companion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-lg ${action.gradient} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Chatbot container */}
        <div className="bg-card rounded-lg border shadow-sm overflow-hidden mb-6 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
              <div className="text-center space-y-4">
                <Bot className="w-12 h-12 text-primary mx-auto animate-pulse" />
                <p className="text-muted-foreground">Loading AI assistant...</p>
              </div>
            </div>
          )}
          {/* Chatbase widget will render here */}
          <div id="chatbase-container" className="min-h-[700px] w-full" />
        </div>

        {/* Disclaimer */}
        <Card className="p-4 bg-muted/50">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Disclaimer:</strong> This AI assistant provides general health information and should not replace professional medical advice. 
            Always consult with a qualified healthcare provider for medical decisions.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AIChatbot;
