import { Progress } from "@/components/ui/progress";

const steps = [
  { label: "Visitors", value: 12345, progress: 100 },
  { label: "Leads", value: 642, progress: 52 },
  { label: "Sign-ups", value: 335, progress: 27 },
  { label: "Purchases", value: 172, progress: 14 },
];

export const ConversionFunnel = () => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{step.label}</span>
            <span className="text-sm text-gray-500">{step.value}</span>
          </div>
          <Progress value={step.progress} className="h-2" />
        </div>
      ))}
    </div>
  );
};