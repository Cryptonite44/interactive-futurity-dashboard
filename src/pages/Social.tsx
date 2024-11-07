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

const Social = () => {
  const socialMetrics = [
    {
      platform: "Twitter/X",
      followers: "45.2K",
      engagement: "3.8%",
      posts: 128,
      clicks: "2.3K",
    },
    {
      platform: "LinkedIn",
      followers: "28.6K",
      engagement: "2.5%",
      posts: 84,
      clicks: "1.8K",
    },
    {
      platform: "Instagram",
      followers: "62.1K",
      engagement: "4.2%",
      posts: 156,
      clicks: "3.1K",
    },
    {
      platform: "Facebook",
      followers: "38.9K",
      engagement: "2.1%",
      posts: 112,
      clicks: "1.5K",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f7f8]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-mint bg-clip-text text-transparent">
            Social Media Analytics
          </h1>
          <p className="text-gray-500">Track and analyze your social media performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {socialMetrics.map((platform) => (
            <Card key={platform.platform} className="p-6 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-4">{platform.platform}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Followers</span>
                  <span className="font-medium">{platform.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Engagement</span>
                  <span className="font-medium">{platform.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Posts</span>
                  <span className="font-medium">{platform.posts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Clicks</span>
                  <span className="font-medium">{platform.clicks}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts Performance</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Platform</TableHead>
                <TableHead>Post Content</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Clicks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell>Twitter/X</TableCell>
                <TableCell>Launch of new cyber security features...</TableCell>
                <TableCell>2024-02-20</TableCell>
                <TableCell>5.2%</TableCell>
                <TableCell>342</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell>LinkedIn</TableCell>
                <TableCell>Introducing our latest enterprise solution...</TableCell>
                <TableCell>2024-02-19</TableCell>
                <TableCell>3.8%</TableCell>
                <TableCell>256</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell>Instagram</TableCell>
                <TableCell>Behind the scenes at our tech hub...</TableCell>
                <TableCell>2024-02-18</TableCell>
                <TableCell>6.1%</TableCell>
                <TableCell>428</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default Social;