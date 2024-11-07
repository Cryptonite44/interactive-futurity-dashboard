import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Advertising = () => {
  const campaigns = [
    {
      platform: "Google Ads",
      budget: "$5,000",
      spent: "$3,245",
      clicks: "12,456",
      conversions: "186",
      roi: "324%",
    },
    {
      platform: "Meta Ads",
      budget: "$3,500",
      spent: "$2,856",
      clicks: "8,234",
      conversions: "142",
      roi: "286%",
    },
    {
      platform: "LinkedIn Ads",
      budget: "$2,500",
      spent: "$1,987",
      clicks: "3,567",
      conversions: "78",
      roi: "245%",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f7f8]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-mint bg-clip-text text-transparent">
            Advertising Dashboard
          </h1>
          <p className="text-gray-500">Track your advertising campaigns and performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Total Spend</h3>
            <div className="text-3xl font-bold text-cyber-pink">$8,088</div>
            <p className="text-sm text-gray-500 mt-2">73% of budget used</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Total Clicks</h3>
            <div className="text-3xl font-bold text-cyber-mint">24,257</div>
            <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Conversions</h3>
            <div className="text-3xl font-bold text-cyber-yellow">406</div>
            <p className="text-sm text-gray-500 mt-2">1.67% conversion rate</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Average ROI</h3>
            <div className="text-3xl font-bold text-cyber-pink">285%</div>
            <p className="text-sm text-gray-500 mt-2">+15% from last month</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Active Campaigns</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Platform</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Spent</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Conversions</TableHead>
                <TableHead>ROI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.platform} className="hover:bg-gray-50">
                  <TableCell>{campaign.platform}</TableCell>
                  <TableCell>{campaign.budget}</TableCell>
                  <TableCell>{campaign.spent}</TableCell>
                  <TableCell>{campaign.clicks}</TableCell>
                  <TableCell>{campaign.conversions}</TableCell>
                  <TableCell>{campaign.roi}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default Advertising;