
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CalendarEmbed from "@/components/CalendarEmbed";
import { Check } from "lucide-react";

const BookingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="w-full py-4 px-6 flex justify-between items-center border-b">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
        <div className="text-sm text-muted-foreground">contact@yoursaasapp.com</div>
      </header>
      
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-10 md:px-6">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Connect with Our Team</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our SaaS solution can enhance your marketing efforts and drive results.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="p-6 border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">What to expect</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>30-minute personalized demo</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Q&A session with a product expert</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Custom pricing overview</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Free resources to take away</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6 border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Select a time</h2>
            <div className="h-[500px] overflow-auto">
              <CalendarEmbed />
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12 pt-6 text-gray-500 text-sm">
          © 2025 YourSaaS Marketing. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
