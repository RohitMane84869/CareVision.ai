import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Bell, Syringe, Info, Home, MessageSquare, User, Heart } from "lucide-react";
import immunityBoost from "@/assets/immunity-boost.jpg";
import fitnessWellness from "@/assets/fitness-wellness.jpg";
import sleepHealth from "@/assets/sleep-health.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Valued User";

  const healthTips = [
    {
      title: "Boost Your Immunity Naturally",
      description: "Discover simple dietary changes and lifestyle habits that can significantly strengthen your body's defense",
      image: immunityBoost,
    },
    {
      title: "The Power of Daily Exercise",
      description: "Even small amounts of daily movement can improve your physical health and overall wellbeing",
      image: fitnessWellness,
    },
    {
      title: "Better Sleep, Better Health",
      description: "Quality sleep is essential for recovery, immune function, and mental wellness",
      image: sleepHealth,
    },
  ];

  const quickAccessItems = [
    {
      title: "Government Schemes",
      icon: Building2,
      path: "/schemes",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Disease Alerts",
      icon: Bell,
      path: "/alerts",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      title: "Vaccine Registration",
      icon: Syringe,
      path: "/vaccine",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "About Us",
      icon: Info,
      path: "/about",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-blue-teal rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-bold">Care Vision</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/profile")}
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Greeting */}
        <div>
          <h1 className="text-2xl font-bold mb-1">Hello, {userName}!</h1>
          <p className="text-muted-foreground text-sm">Your daily health insights await.</p>
        </div>

        {/* Health & Wellness Tips */}
        <section>
          <h2 className="text-lg font-bold mb-4">Health & Wellness Tips</h2>
          <div className="flex overflow-x-auto gap-4 pb-2 -mx-4 px-4 snap-x snap-mandatory">
            {healthTips.map((tip, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[280px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow snap-start"
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-sm">{tip.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {tip.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => navigate("/chatbot")}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Access */}
        <section>
          <h2 className="text-lg font-bold mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickAccessItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(item.path)}
                >
                  <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center mb-3`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                </Card>
              );
            })}
          </div>
        </section>
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-around items-center py-3">
            <Button
              variant="ghost"
              size="sm"
              className="flex-col h-auto py-2 text-primary"
              onClick={() => navigate("/dashboard")}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Dashboard</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-col h-auto py-2"
              onClick={() => navigate("/schemes")}
            >
              <Building2 className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Schemes</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-col h-auto py-2"
              onClick={() => navigate("/alerts")}
            >
              <Bell className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Alerts</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-col h-auto py-2"
              onClick={() => navigate("/chatbot")}
            >
              <MessageSquare className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Chatbot</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-col h-auto py-2"
              onClick={() => navigate("/profile")}
            >
              <User className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
