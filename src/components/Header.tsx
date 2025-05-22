
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  email?: string;
}

const Header = ({ email = "user@example.com" }: HeaderProps) => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b">
      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </Button>
      <div className="flex items-center">
        <div className="text-sm text-muted-foreground">{email}</div>
        <Button variant="ghost" size="sm" className="ml-2">
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-60"
          >
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
