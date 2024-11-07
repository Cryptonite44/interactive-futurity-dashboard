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

const Email = () => {
  const campaigns = [
    {
      name: "February Newsletter",
      sent: "15,234",
      openRate: "24.8%",
      clickRate: "3.2%",
      conversions: "86",
    },
    {
      name: "Product Launch",
      sent: "45,678",
      openRate: "32.1%",
      clickRate: "5.6%",
      conversions: "234",
    },
    {
      name: "Customer Survey",
      sent: "28,456",
      openRate: "28.4%",
      clickRate: "4.1%",
      conversions: "142",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f7f8]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-mint bg-clip-text text-transparent">
            Email Marketing
          </h1>
          <p className="text-gray-500">Monitor your email campaign performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Overall Open Rate</h3>
            <div className="text-3xl font-bold text-cyber-pink">28.4%</div>
            <p className="text-sm text-gray-500 mt-2">+2.1% from last month</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Click-through Rate</h3>
            <div className="text-3xl font-bold text-cyber-mint">4.3%</div>
            <p className="text-sm text-gray-500 mt-2">+0.5% from last month</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Conversion Rate</h3>
            <div className="text-3xl font-bold text-cyber-yellow">1.2%</div>
            <p className="text-sm text-gray-500 mt-2">+0.2% from last month</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Campaigns</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Emails Sent</TableHead>
                <TableHead>Open Rate</TableHead>
                <TableHead>Click Rate</TableHead>
                <TableHead>Conversions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.name} className="hover:bg-gray-50">
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>{campaign.sent}</TableCell>
                  <TableCell>{campaign.openRate}</TableCell>
                  <TableCell>{campaign.clickRate}</TableCell>
                  <TableCell>{campaign.conversions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default Email;