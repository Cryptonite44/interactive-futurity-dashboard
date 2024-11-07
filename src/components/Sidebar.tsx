import { CircuitBoard, Home, FileText, Share2, Mail, DollarSign, Users, Settings, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", active: false },
  { icon: CircuitBoard, label: "Overview", active: true },
  { icon: FileText, label: "Content", active: false },
  { icon: Share2, label: "Social Media", active: false },
  { icon: Mail, label: "Email Marketing", active: false },
  { icon: DollarSign, label: "Advertising", active: false },
  { icon: Users, label: "Customer Acquisition", active: false },
  { icon: BarChart, label: "Reports", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-8">
        <CircuitBoard className="w-8 h-8 text-cyber-pink" />
        <span className="text-xl font-bold">Cyber Metrics</span>
      </div>
      
      <nav>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors",
              item.active
                ? "bg-cyber-pink/10 text-cyber-pink"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};