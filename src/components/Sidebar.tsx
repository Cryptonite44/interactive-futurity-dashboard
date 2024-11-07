import { CircuitBoard, Home, FileText, Share2, Mail, DollarSign, Users, Settings, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: CircuitBoard, label: "Overview", path: "/overview" },
  { icon: FileText, label: "Content", path: "/content" },
  { icon: Share2, label: "Social Media", path: "/social" },
  { icon: Mail, label: "Email Marketing", path: "/email" },
  { icon: DollarSign, label: "Advertising", path: "/advertising" },
  { icon: Users, label: "Customer Acquisition", path: "/customers" },
  { icon: BarChart, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 min-h-screen">
      <div className="flex items-center gap-2 mb-8">
        <CircuitBoard className="w-8 h-8 text-cyber-pink animate-pulse" />
        <span className="text-xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-mint bg-clip-text text-transparent">
          Cyber Metrics
        </span>
      </div>
      
      <nav>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={cn(
              "flex w-full items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all hover:scale-105",
              location.pathname === item.path
                ? "bg-gradient-to-r from-cyber-pink/20 to-cyber-mint/20 text-cyber-pink shadow-lg"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5",
              location.pathname === item.path && "animate-pulse"
            )} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};