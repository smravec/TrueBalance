import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "Button clicked! ✨",
      description: "Welcome to your beautiful new app!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            A beautiful, simple app with one perfect button
          </p>
        </div>
        
        <Button 
          variant="hero" 
          size="lg" 
          onClick={handleButtonClick}
          className="text-lg px-12 py-6 h-auto"
        >
          Click Me ✨
        </Button>
      </div>
    </div>
  );
};

export default Index;
