import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, FileText, Bot } from "lucide-react";
import { onboardingSlides } from "@/data/mock";

const iconMap = {
  Bell: Bell,
  FileText: FileText,
  Bot: Bot,
};

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleFinish();
    }
  };

  const handleSkip = () => {
    handleFinish();
  };

  const handleFinish = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    navigate("/login");
  };

  const Icon = iconMap[onboardingSlides[currentSlide].icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-between p-8">
      {/* Skip button */}
      <div className="w-full max-w-md flex justify-end">
        <Button variant="ghost" onClick={handleSkip} className="text-muted-foreground">
          Skip
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full space-y-8">
        {/* Icon */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full gradient-blue-teal flex items-center justify-center">
            <Icon className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            {onboardingSlides[currentSlide].title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {onboardingSlides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Progress and buttons */}
      <div className="w-full max-w-md space-y-8">
        {/* Progress dots */}
        <div className="flex justify-center space-x-2">
          {onboardingSlides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <Button onClick={handleNext} className="w-full gradient-blue-teal text-white">
          {currentSlide < onboardingSlides.length - 1 ? "Next" : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
