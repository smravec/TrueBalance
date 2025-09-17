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
    <div className="min-h-screen bg-gradient-bg flex flex-col">
      {/* Header with Logo */}
      <header className="p-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-2 bg-primary rounded-lg">
            <Zap className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">TrueBalance</h2>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent max-w-4xl mx-auto leading-tight">
              Meet your fully AI-powered accountant — delivering expert guidance while taking care of your accounting and taxes, so you can focus on what matters most.
            </h1>
          </div>
          
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleButtonClick}
            className="text-lg px-12 py-6 h-auto"
          >
            Ask your new accountant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
