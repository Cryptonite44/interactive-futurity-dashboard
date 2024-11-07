import { Card } from "@/components/ui/card";
import { CircuitBoard, TrendingUp, Users } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 400 },
  { value: 300 },
  { value: 500 },
  { value: 350 },
  { value: 450 },
  { value: 600 },
  { value: 550 },
];

const stats = [
  {
    title: "Total Visitors",
    value: "12,345",
    change: "+5,678",
    trend: "up",
    color: "cyber-pink",
    icon: Users,
  },
  {
    title: "Revenue Generated",
    value: "$45,678",
    change: "+$5,678",
    trend: "up",
    color: "cyber-mint",
    icon: CircuitBoard,
  },
  {
    title: "ROI",
    value: "18.5%",
    change: "+2.3%",
    trend: "up",
    color: "cyber-yellow",
    icon: TrendingUp,
  },
];

export const Overview = () => {
  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className={`text-sm mt-1 text-${stat.color}`}>
                {stat.change}
              </p>
            </div>
            <stat.icon className={`w-6 h-6 text-${stat.color}`} />
          </div>
          <div className="h-16 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={`var(--${stat.color})`}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      ))}
    </>
  );
};