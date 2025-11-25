import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, MapPin, CheckCircle2, Share2 } from "lucide-react";
import { governmentSchemes } from "@/data/mock";
import { useToast } from "@/hooks/use-toast";

const categories = ["All", "Health Insurance", "Maternal Health", "Child Health", "Vaccination"];

const GovernmentSchemes = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSchemes = selectedCategory === "All"
    ? governmentSchemes
    : governmentSchemes.filter(scheme => scheme.type === selectedCategory);

  const handleShare = async (scheme: typeof governmentSchemes[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: scheme.title,
          text: scheme.description,
          url: scheme.link,
        });
      } catch (error) {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(scheme.link);
      toast({
        title: "Link copied!",
        description: "Scheme link copied to clipboard",
      });
    }
  };

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
          <h1 className="text-3xl font-bold mb-2">Government Schemes</h1>
          <p className="text-white/90">Discover health benefits available to you</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-4">
        {/* Filter pills */}
        <div className="bg-card rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "gradient-blue-teal text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Schemes list */}
        <div className="space-y-4">
          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs">
                        {scheme.type}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{scheme.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{scheme.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShare(scheme)}
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Region */}
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{scheme.region}</span>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Key Benefits:</p>
                <div className="space-y-1">
                  {scheme.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="bg-muted rounded-lg p-3 mb-4">
                <p className="text-sm font-medium mb-1">Eligibility:</p>
                <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
              </div>

              {/* Apply button */}
              <Button
                className="w-full gradient-blue-teal text-white"
                onClick={() => window.open(scheme.link, "_blank")}
              >
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;
