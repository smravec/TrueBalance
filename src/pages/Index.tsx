import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Zap } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "Button clicked! ✨",
      description: "Welcome to your beautiful new app!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-primary/5"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Content */}
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-white rounded-lg shadow-card">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <span className="text-2xl font-inter font-semibold text-black">TrueBalance</span>
          </div>
          
          {/* Main heading in Trullion style */}
          <div className="space-y-6">
            <h1 className="font-playfair text-5xl lg:text-6xl font-medium text-black leading-[1.1] tracking-tight">
              Meet your fully AI-powered accounting assistant
            </h1>
            
            <p className="font-inter text-lg text-black leading-relaxed max-w-md">
              Delivering expert guidance while taking care of your accounting and taxes, so you can focus on what matters most.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleButtonClick}
              className="font-inter text-base px-8 py-4 h-auto rounded-lg font-medium shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              See TrueBalance in action
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center space-x-6 pt-6 text-black text-sm font-inter">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Tax Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Expert Guidance</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Visual placeholder */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center shadow-card">
            <Zap className="w-24 h-24 text-primary opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
