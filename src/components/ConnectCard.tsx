
import { Button } from "@/components/ui/button";

interface ConnectCardProps {
  icon: React.ReactNode;
  name: string;
}

const ConnectCard = ({ icon, name }: ConnectCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mt-3">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{name}</span>
      </div>
      <Button variant="outline" className="bg-white">Connect</Button>
    </div>
  );
};

export default ConnectCard;
