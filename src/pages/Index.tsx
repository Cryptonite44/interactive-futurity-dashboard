import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Sidebar } from "@/components/Sidebar";
import { Overview } from "@/components/Overview";
import { TrafficChart } from "@/components/TrafficChart";
import { ConversionFunnel } from "@/components/ConversionFunnel";
import { ContentTable } from "@/components/ContentTable";
import { AlertsPanel } from "@/components/AlertsPanel";
import { UserProfile } from "@/components/UserProfile";

const Index = () => {
  const [dateRange, setDateRange] = useState("2023-09-01 to 2023-09-30");

  return (
    <div className="flex min-h-screen bg-[#f8f7f8]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Overview</h1>
            <p className="text-gray-500">Marketing Performance</p>
          </div>
          <UserProfile />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Overview />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
            <TrafficChart />
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
            <ConversionFunnel />
          </Card>
        </div>

        <div className="mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Content Performance</h2>
            <ContentTable />
          </Card>
        </div>

        <div className="mt-8">
          <AlertsPanel />
        </div>
      </main>
    </div>
  );
};

export default Index;