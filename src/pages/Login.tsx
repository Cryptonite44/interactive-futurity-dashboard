import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { EncryptButton } from "@/components/EncryptButton";

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
      console.error("Login error:", error);
      if (error.message.includes("Email logins are disabled")) {
        toast.error("Email/password login is currently disabled. Please contact your administrator.");
      } else {
        toast.error(error.message || "Failed to sign in");
      }
    } else if (data?.user) {
      toast.success("Logged in successfully!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    
    setLoading(false);
  };

  const handleSignUp = async (e: React.MouseEvent) => {
    e.preventDefault();
    toast.error("New user registration is currently disabled. Please contact your administrator.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Card className="p-8 w-full max-w-md bg-white/10 border-cyber-pink/50 backdrop-blur-xl">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-cyber-pink via-cyber-mint to-cyber-yellow bg-clip-text text-transparent">
            Marketing Dashboard
          </h1>
          <Alert>
            <AlertDescription>
              Email/password authentication is currently disabled. Please contact your administrator to enable it or to get access.
            </AlertDescription>
          </Alert>
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
              <EncryptButton onClick={handleLogin} loading={loading} />
              <button
                type="button"
                onClick={handleSignUp}
                className="w-full bg-cyber-mint hover:bg-cyber-mint/80 text-black px-4 py-2 rounded-lg font-mono uppercase transition-colors"
                disabled={loading}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;