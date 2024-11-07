import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const content = [
  {
    title: "Data-Driven Marketing..",
    views: 5432,
    bounceRate: "45%",
    conversion: "8.2%",
  },
  {
    title: "Blogging Success: Craf..",
    views: 3245,
    bounceRate: "30%",
    conversion: "12.1%",
  },
  {
    title: "Digital Marketing Trend..",
    views: 2876,
    bounceRate: "40%",
    conversion: "6.9%",
  },
];

export const ContentTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Content Title</TableHead>
          <TableHead>Page Views</TableHead>
          <TableHead>Bounce Rate</TableHead>
          <TableHead>Conversion Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {content.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.title}</TableCell>
            <TableCell>{item.views}</TableCell>
            <TableCell>{item.bounceRate}</TableCell>
            <TableCell>{item.conversion}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};