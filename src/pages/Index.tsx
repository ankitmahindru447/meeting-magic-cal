
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="text-center max-w-md px-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Marketing Analytics SaaS</h1>
        <p className="text-xl text-gray-600 mb-8">Connect your ad platforms and optimize your marketing performance</p>
        <div className="space-y-4">
          <Link to="/booking">
            <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700">Schedule a Demo</Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
