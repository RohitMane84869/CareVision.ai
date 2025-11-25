import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, User, Mail, Phone, MapPin, Settings, Bell, Shield, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const userPhone = localStorage.getItem("userPhone") || "+91 98765 43210";
  const userCity = localStorage.getItem("userCity") || "Mumbai";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/login");
  };

  const userInfo = [
    { icon: User, label: "Name", value: userName, color: "bg-primary/10 text-primary" },
    { icon: Mail, label: "Email", value: userEmail, color: "bg-secondary/10 text-secondary" },
    { icon: Phone, label: "Phone", value: userPhone, color: "bg-success/10 text-success" },
    { icon: MapPin, label: "City", value: userCity, color: "bg-warning/10 text-warning" },
  ];

  const settingsOptions = [
    { icon: Settings, label: "Account Settings", description: "Manage your account preferences" },
    { icon: Bell, label: "Notifications", description: "Control alert preferences" },
    { icon: Shield, label: "Privacy & Security", description: "Manage your privacy settings" },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="gradient-blue-teal text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-white/90">Manage your CareVision account</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-6">
        {/* Profile header */}
        <Card className="p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {userName.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-1">{userName}</h2>
          <p className="text-muted-foreground">CareVision Member</p>
        </Card>

        {/* User information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg ${info.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Settings */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Settings</h3>
          <div className="space-y-3">
            {settingsOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{option.label}</h4>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Logout button */}
        <Button
          variant="destructive"
          className="w-full"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
