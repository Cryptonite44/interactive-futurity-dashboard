import { Card } from "@/components/ui/card";
import { AlertTriangle, Package, MessageSquare } from "lucide-react";

const alerts = [
  {
    icon: AlertTriangle,
    title: "Conversion Dip",
    message: "Conversion rates have dropped significantly. Investigate and act now.",
    type: "warning",
  },
  {
    icon: Package,
    title: "Low Inventory",
    message: "Popular product running low. Restock ASAP.",
    type: "danger",
  },
  {
    icon: MessageSquare,
    title: "Social Buzz",
    message: "Brand mentions surging on social media. Engage with customers.",
    type: "info",
  },
];

export const AlertsPanel = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Alerts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {alerts.map((alert, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
              <alert.icon className="w-5 h-5 text-cyber-pink" />
              <div>
                <h3 className="font-semibold">{alert.title}</h3>
                <p className="text-sm text-gray-500">{alert.message}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};