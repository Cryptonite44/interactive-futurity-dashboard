import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // First clear the session from local storage
      localStorage.removeItem('sb-rruqqrejqarlhjohvomu-auth-token');
      
      // Attempt to sign out from Supabase
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Supabase logout error:', error);
        // Even if Supabase logout fails, we'll still redirect the user
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always show success message and redirect, even if there were backend errors
      toast.success("Logged out successfully");
      navigate("/login");
    }
  };

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
      <Button variant="ghost" size="icon" onClick={handleLogout}>
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
};