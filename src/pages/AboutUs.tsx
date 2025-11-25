import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, Eye, Activity, Target, Award, Building2, AlertTriangle, Bot, Syringe, Mail, Send } from "lucide-react";
import { teamMembers } from "@/data/mock";

const AboutUs = () => {
  const navigate = useNavigate();

  const values = [
    {
      title: "Our Mission",
      description: "To democratize healthcare access through technology and empower citizens with verified health information",
      icon: Target,
      gradient: "gradient-blue-teal",
    },
    {
      title: "Our Vision",
      description: "A healthier India where every citizen has access to timely health services and information",
      icon: Eye,
      gradient: "gradient-green",
    },
    {
      title: "Our Values",
      description: "Integrity, accessibility, innovation, and compassion drive everything we do",
      icon: Award,
      gradient: "gradient-orange-red",
    },
  ];

  const features = [
    {
      title: "Real-Time Disease Alerts",
      description: "Stay informed about health emergencies and outbreaks",
      icon: AlertTriangle,
    },
    {
      title: "Government Schemes",
      description: "Easy access to verified health benefits and programs",
      icon: Building2,
    },
    {
      title: "AI Health Assistant",
      description: "24/7 support for your health queries and concerns",
      icon: Bot,
    },
    {
      title: "Vaccine Registration",
      description: "Simplified vaccination scheduling and tracking",
      icon: Syringe,
    },
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
          <h1 className="text-3xl font-bold mb-2">About CareVision</h1>
          <p className="text-white/90">Revolutionizing healthcare access for every Indian</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pt-6 space-y-8">
        {/* Logo and mission */}
        <Card className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="flex items-center space-x-2">
                <div className="w-16 h-16 rounded-full gradient-blue-teal flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" fill="white" />
                </div>
                <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 rounded-full gradient-orange-red flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">CareVision Health</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CareVision is India's smart healthcare companion, bridging the gap between citizens and essential health services. 
            We combine AI technology with verified government data to make healthcare information accessible to everyone.
          </p>
        </Card>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6">
                <div className={`w-14 h-14 rounded-xl ${value.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>

        {/* What we offer */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Join network CTA */}
        <Card className="gradient-purple-pink text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Join Our Network</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of a healthier India. Connect with us to stay updated on health initiatives and features.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="secondary"
              onClick={() => window.location.href = "mailto:contact@carevision.health"}
              className="bg-white text-foreground hover:bg-white/90"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open("https://t.me/CareVision_bot", "_blank")}
              className="bg-white text-foreground hover:bg-white/90"
            >
              <Send className="w-4 h-4 mr-2" />
              Telegram Bot
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground space-y-2 pt-4">
          <div className="flex justify-center space-x-4">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <span>•</span>
            <button className="hover:text-primary transition-colors">Contact</button>
          </div>
          <p>© 2025 CareVision Health. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
