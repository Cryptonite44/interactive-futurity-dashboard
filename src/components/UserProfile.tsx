import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const UserProfile = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-right">
        <h3 className="font-medium">Anirudh</h3>
        <p className="text-sm text-gray-500">Marketing Manager</p>
      </div>
      <Avatar>
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
      <Button variant="ghost" size="icon">
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
};