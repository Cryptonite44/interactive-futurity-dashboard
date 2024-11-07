import { Sidebar } from "@/components/Sidebar";
import { ContentTable } from "@/components/ContentTable";
import { Card } from "@/components/ui/card";

const Content = () => {
  return (
    <div className="flex min-h-screen bg-[#f8f7f8]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-mint bg-clip-text text-transparent">
            Content Management
          </h1>
          <p className="text-gray-500">Manage and analyze your content performance</p>
        </div>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Content Performance</h2>
          <ContentTable />
        </Card>
      </main>
    </div>
  );
};

export default Content;