import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BrainTLogo } from "@/components/BrainTLogo";
import { useState, useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentInvoiceNumber, setCurrentInvoiceNumber] = useState(1);
  const [dots, setDots] = useState(".");
  const [processedInvoices, setProcessedInvoices] = useState<
    Array<{
      filename: string;
      success: boolean;
      deductible?: boolean;
      error?: string;
    }>
  >([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Dots animation effect
  useEffect(() => {
    if (!isProcessing) return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === ".") return "..";
        if (prev === "..") return "...";
        return ".";
      });
    }, 500); // Change every 500ms

    return () => clearInterval(interval);
  }, [isProcessing]);

  // Reset dots when processing stops
  useEffect(() => {
    if (!isProcessing) {
      setDots(".");
    }
  }, [isProcessing]);

  const handleButtonClick = async () => {
    // If completed, reset to initial state
    if (isCompleted) {
      setSelectedFiles(null);
      setProcessedInvoices([]);
      setIsCompleted(false);
      setCurrentInvoiceNumber(1);
      // Reset file input
      const fileInput = document.getElementById(
        "pdf-upload"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      return;
    }

    if (!selectedFiles || selectedFiles.length === 0) {
      toast({
        title: "No file selected ❌",
        description: "Please upload a PDF file first.",
        variant: "destructive",
      });
      return;
    }

    // Set processing state
    setIsProcessing(true);
    setProcessedInvoices([]);
    setCurrentInvoiceNumber(1);

    try {
      // Process all files sequentially
      await processAllPDFs();
    } catch (error) {
      console.error("Processing failed:", error);
      toast({
        title: "Processing failed ❌",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      // Reset processing state and mark as completed
      setIsProcessing(false);
      setIsCompleted(true);
    }
  };

  const processAllPDFs = async () => {
    if (!selectedFiles) return;

    const files = Array.from(selectedFiles);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setCurrentInvoiceNumber(i + 1);

      try {
        // Extract text from PDF
        const [extractResult] = await Promise.all([
          processPDFFile(file),
          new Promise((resolve) => setTimeout(resolve, 1000)), // Shorter delay for PDF extraction
        ]);

        // Send extracted text to dummy-voiceflow for analysis
        const analysisResult = await analyzeWithVoiceflow(extractResult.text);

        // Add another delay for the analysis step
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setProcessedInvoices((prev) => [
          ...prev,
          {
            filename: file.name,
            success: true,
            deductible: analysisResult.deductible,
          },
        ]);
      } catch (error) {
        console.error(`Failed to process ${file.name}:`, error);
        setProcessedInvoices((prev) => [
          ...prev,
          {
            filename: file.name,
            success: false,
            deductible: false,
            error: error instanceof Error ? error.message : "Unknown error",
          },
        ]);
      }
    }
  };

  const analyzeWithVoiceflow = async (text: string) => {
    const response = await fetch("http://localhost:5001/api/dummy-voiceflow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });

    const result = await response.json();
    console.log("Voiceflow Analysis Result:", result);

    if (!response.ok) {
      throw new Error(result.error || "Analysis failed");
    }

    return result;
  };

  const processPDFFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5001/api/extract-pdf-text", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    // Log the response to console
    console.log("API Response:", result);

    if (result.success) {
      console.log("Extracted text:", result.text);
      return result;
    } else {
      throw new Error(result.error || "Failed to process PDF");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(files);
      toast({
        title: "Files uploaded! 📄",
        description: `${files.length} PDF file(s) selected for processing.`,
      });
    }
  };

  const handleUploadClick = () => {
    document.getElementById("pdf-upload")?.click();
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
          {isProcessing ? (
            <>
              Reading invoice number <br /> #{currentInvoiceNumber} {dots}
            </>
          ) : (
            <>
              Instantly see if your expenses <br /> are VAT-deductible with
              agentic AI
            </>
          )}
        </h1>

        {/* PDF Upload Area / Results */}
        <div
          onClick={!isCompleted ? handleUploadClick : undefined}
          className={`relative border-2 border-dashed border-gray-300 rounded-lg p-12 text-center transition-all duration-300 w-[550px] h-[200px] flex flex-col items-center justify-center bg-white ${
            !isCompleted
              ? "cursor-pointer hover:border-primary hover:bg-gray-50 group"
              : ""
          }`}
        >
          <input
            id="pdf-upload"
            type="file"
            accept=".pdf,application/pdf"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />

          {isCompleted ? (
            // Results display when completed
            <div className="w-full">
              <h3 className="font-medium text-lg mb-4 text-black">
                Processing Complete
              </h3>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {processedInvoices.map((invoice, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <span className="text-sm font-medium">
                      Invoice {index + 1}
                    </span>
                    <span
                      className={`text-sm ${
                        !invoice.success
                          ? "text-red-600"
                          : invoice.deductible
                          ? "text-green-600"
                          : "text-orange-600"
                      }`}
                    >
                      {!invoice.success
                        ? "❌ Failed"
                        : invoice.deductible
                        ? "✅ Deductible"
                        : "❌ Not deductible"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Upload Icon */}
              <div className="mb-4">
                {isProcessing ? (
                  // Spinner during processing
                  <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full"></div>
                ) : (
                  // Upload icon when not processing
                  <svg
                    className="w-12 h-12 text-gray-400 group-hover:text-primary transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                )}
              </div>

              {/* Upload Text */}
              <div className="text-gray-600 group-hover:text-gray-800">
                {selectedFiles ? (
                  <div>
                    <p className="font-medium text-primary">
                      {selectedFiles.length} file(s) selected
                    </p>
                    <p className="text-sm mt-1">Click to change files</p>
                  </div>
                ) : (
                  <div>
                    <p className="font-medium">Click to upload PDF invoices</p>
                    <p className="text-sm mt-1">or drag and drop</p>
                    <p className="text-xs mt-2 text-gray-400">PDF files only</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* CTA Button */}
        <Button
          variant="hero"
          size="lg"
          onClick={handleButtonClick}
          disabled={isProcessing}
          className="font-inter mt-10 text-base  p-4 h-auto rounded-lg font-medium shadow-elegant hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing
            ? "Processing..."
            : isCompleted
            ? "Upload Again"
            : "Get possible VAT write-offs"}
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
