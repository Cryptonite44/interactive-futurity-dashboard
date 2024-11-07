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
import { Download } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      name: "Monthly Marketing Overview",
      type: "Marketing Performance",
      date: "2024-02-01",
      size: "2.4 MB",
    },
    {
      name: "Q4 2023 Analysis",
      type: "Quarterly Report",
      date: "2024-01-15",
      size: "4.8 MB",
    },
    {
      name: "Campaign Performance Review",
      type: "Campaign Analysis",
      date: "2024-01-30",
      size: "1.8 MB",
    },
    {
      name: "Social Media Impact Study",
      type: "Social Analytics",
      date: "2024-02-10",
      size: "3.2 MB",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f7f8]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-mint bg-clip-text text-transparent">
            Reports Center
          </h1>
          <p className="text-gray-500">Access and download your marketing reports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Available Reports</h3>
            <div className="text-3xl font-bold text-cyber-pink">24</div>
            <p className="text-sm text-gray-500 mt-2">Last updated today</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Generated This Month</h3>
            <div className="text-3xl font-bold text-cyber-mint">8</div>
            <p className="text-sm text-gray-500 mt-2">+2 from last month</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Storage Used</h3>
            <div className="text-3xl font-bold text-cyber-yellow">45.2 MB</div>
            <p className="text-sm text-gray-500 mt-2">15% of total storage</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.name} className="hover:bg-gray-50">
                  <TableCell>{report.name}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.size}</TableCell>
                  <TableCell>
                    <button className="text-cyber-pink hover:text-cyber-mint transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default Reports;