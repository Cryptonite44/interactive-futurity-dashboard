import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card } from "./ui/card";
import { toast } from "./ui/use-toast";

const initialData = [
  { name: "Social Media", value: 40, details: "40% from Facebook, Instagram, Twitter" },
  { name: "Direct Traffic", value: 20, details: "20% from direct URL entries" },
  { name: "Organic Search", value: 15, details: "15% from Google, Bing" },
  { name: "Paid Search", value: 25, details: "25% from Google Ads, Bing Ads" },
];

const COLORS = ["#FF3366", "#FFB800", "#00F5D4", "#2A2A2A"];

export const TrafficChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [data, setData] = useState(initialData);

  const handlePieClick = (data: any, index: number) => {
    setActiveIndex(index);
    toast({
      title: data.name,
      description: data.details,
      className: "bg-gradient-to-r from-cyber-pink to-cyber-mint text-white",
    });
  };

  return (
    <div className="h-[300px] relative group">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            onClick={handlePieClick}
            className="cursor-pointer"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                className="transition-all hover:opacity-80"
                style={{
                  filter: activeIndex === index ? 'drop-shadow(0 0 8px rgba(255, 51, 102, 0.5))' : 'none',
                  transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value: string) => (
              <span className="text-sm font-medium">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};