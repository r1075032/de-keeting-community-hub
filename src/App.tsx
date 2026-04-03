import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import HulpDiensten from "./pages/HulpDiensten";
import Activiteiten from "./pages/Activiteiten";
import Vrijwilligers from "./pages/Vrijwilligers";
import Verhalen from "./pages/Verhalen";
import Doneren from "./pages/Doneren";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hulp-diensten" element={<HulpDiensten />} />
          <Route path="/activiteiten" element={<Activiteiten />} />
          <Route path="/vrijwilligers" element={<Vrijwilligers />} />
          <Route path="/verhalen" element={<Verhalen />} />
          <Route path="/doneren" element={<Doneren />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
