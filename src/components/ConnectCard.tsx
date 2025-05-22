
import { Button } from "@/components/ui/button";

interface ConnectCardProps {
  icon: React.ReactNode;
  name: string;
  onClick?: () => void;
}

const ConnectCard = ({ icon, name, onClick }: ConnectCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{name}</span>
      </div>
      <Button 
        variant="outline" 
        className="bg-white hover:bg-gray-50"
        onClick={onClick}
      >
        Connect
      </Button>
    </div>
  );
};

export default ConnectCard;
