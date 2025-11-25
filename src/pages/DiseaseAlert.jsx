import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, AlertTriangle, MapPin, Calendar, Activity } from "lucide-react";
import { diseaseAlerts } from "@/data/mock";
import { useToast } from "@/hooks/use-toast";

const DiseaseAlert = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    disease: "",
  });

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High":
        return "destructive";
      case "Medium":
        return "warning";
      case "Low":
        return "info";
      default:
        return "secondary";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.city || !formData.email || !formData.disease) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "You'll receive alerts for " + formData.disease,
    });
    setIsModalOpen(false);
    setFormData({ name: "", city: "", email: "", disease: "" });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="gradient-orange-red text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-bold mb-2">Disease Alerts</h1>
          <p className="text-white/90">Stay informed about health outbreaks in your area</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-4">
        {/* Active alerts banner */}
        <Card className="p-4 mb-6 bg-warning/10 border-warning">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Activity className="w-6 h-6 text-warning animate-pulse" />
              <div>
                <p className="font-semibold text-sm">Active Health Alerts</p>
                <p className="text-xs text-muted-foreground">5 disease outbreaks currently monitored</p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="gradient-blue-teal text-white"
            >
              Register
            </Button>
          </div>
        </Card>

        {/* Alerts list */}
        <div className="space-y-4">
          {diseaseAlerts.map((alert) => (
            <Card key={alert.id} className="p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-12 h-12 rounded-lg bg-${alert.color}/10 flex items-center justify-center`}>
                      <AlertTriangle className={`w-6 h-6 text-${alert.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{alert.disease}</h3>
                      <Badge variant={getRiskColor(alert.riskLevel) as any} className="mt-1">
                        {alert.riskLevel} Risk
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location and date */}
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{alert.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {alert.updatedAt}</span>
                </div>
              </div>

              {/* Symptoms */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Common Symptoms:</p>
                <div className="flex flex-wrap gap-2">
                  {alert.symptoms.map((symptom, index) => (
                    <Badge key={index} variant="outline" className="bg-info/10 text-info border-info/20">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Prevention */}
              <div className="bg-success/10 rounded-lg p-4">
                <p className="text-sm font-medium mb-2 text-success">Prevention Tips:</p>
                <ul className="space-y-1">
                  {alert.prevention.map((tip, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Register button */}
              <Button
                className="w-full mt-4 gradient-blue-teal text-white"
                onClick={() => {
                  setFormData(prev => ({ ...prev, disease: alert.disease }));
                  setIsModalOpen(true);
                }}
              >
                Register for Alerts
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register for Disease Alerts</DialogTitle>
            <DialogDescription>
              Get notified about disease outbreaks in your area
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="Mumbai"
                value={formData.city}
                onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disease">Disease Type</Label>
              <Select value={formData.disease} onValueChange={(value) => setFormData(prev => ({ ...prev, disease: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select disease" />
                </SelectTrigger>
                <SelectContent>
                  {diseaseAlerts.map((alert) => (
                    <SelectItem key={alert.id} value={alert.disease}>
                      {alert.disease}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex space-x-2">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 gradient-blue-teal text-white">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DiseaseAlert;
