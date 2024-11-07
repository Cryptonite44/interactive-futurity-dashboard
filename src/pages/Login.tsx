import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error); // This will help with debugging
      toast.error(error.message || "Failed to sign in");
    } else if (data?.user) {
      toast.success("Logged in successfully!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    
    setLoading(false);
  };

  const handleSignUp = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    
    setLoading(true);
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          full_name: email.split('@')[0],
        }
      }
    });

    if (error) {
      console.error("Signup error:", error); // This will help with debugging
      let errorMessage = error.message;
      if (error.message.includes('email_address_not_authorized')) {
        errorMessage = "This email domain is not authorized. Please use an authorized email address or contact support.";
      }
      toast.error(errorMessage);
    } else if (data?.user) {
      toast.success("Check your email to confirm your account!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Card className="p-8 w-full max-w-md bg-white/10 border-cyber-pink/50 backdrop-blur-xl">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-cyber-pink via-cyber-mint to-cyber-yellow bg-clip-text text-transparent">
            Marketing Dashboard
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-cyber-pink/50 bg-white/20 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-cyber-pink/50 bg-white/20 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full bg-cyber-pink hover:bg-cyber-pink/80 text-white"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
              <Button
                type="button"
                onClick={handleSignUp}
                className="w-full bg-cyber-mint hover:bg-cyber-mint/80 text-black"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;