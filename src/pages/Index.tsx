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
    <div className="min-h-screen bg-gradient-bg flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      {/* Header with Logo */}
      <header className="relative z-10 p-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="p-3 bg-white rounded-2xl shadow-card">
            <Zap className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground tracking-tight">TrueBalance</h2>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight tracking-tight">
              Meet your fully AI-powered accountant — delivering expert guidance while taking care of your accounting and taxes, so you can focus on what matters most.
            </h1>
          </div>
          
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleButtonClick}
            className="text-xl px-16 py-8 h-auto rounded-2xl font-semibold tracking-wide shadow-glow transform hover:scale-105 transition-all duration-300"
          >
            Ask your new accountant
          </Button>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 pt-8 text-muted-foreground text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Tax Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
