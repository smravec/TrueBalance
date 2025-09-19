import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BrainTLogo } from "@/components/BrainTLogo";

const Index = () => {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "Button clicked! ✨",
      description: "Welcome to your beautiful new app!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex-col w-screen overflow-hidden">
      {/*Navbar*/}
      <nav className="flex mt-5 ml-5 w-screen ">
        {/* Logo/Brand - Enhanced AI Company Look */}
        <div className="flex items-center space-x-4 mb-8">
          <div className=" group">
            {/* Main logo container with gradient */}
            <div className="p-3 bg-gradient-to-br from-primary/20 via-white to-accent/20 rounded-xl shadow-elegant border border-white/40 backdrop-blur-sm">
              <BrainTLogo className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Enhanced company name */}
          <div className="flex flex-col">
            <span className="text-3xl font-inter font-bold text-black tracking-tight">
              True<span className="text-primary">Balance</span>
            </span>
            <span className="text-xs font-inter font-medium text-black/60 tracking-wider uppercase">
              AI VAT Write-offs
            </span>
          </div>
        </div>
      </nav>

      <main className="flex flex-col mt-5 w-screen items-center justify-center ">
        <h1 className="mb-10 text-3xl text-center font-inter font-bold text-black tracking-tight">
          Instantly see if your expenses <br /> are tax-deductible with AI
        </h1>
        <div className="flex justify-center items-center h-[200px] w-[550px]  bg-white rounded-lg ">
          Upload your invoice
        </div>

        {/* CTA Button */}
        <Button
          variant="hero"
          size="lg"
          onClick={handleButtonClick}
          className="font-inter mt-10 text-base  p-4 h-auto rounded-lg font-medium shadow-elegant hover:shadow-glow transition-all duration-300"
        >
          Get possible VAT write-off
        </Button>

        {/* Trust indicators */}
        <div className="flex items-center space-x-6 pt-6 text-black text-sm font-inter">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Compliant with latest Finnish VAT laws</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
