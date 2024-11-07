import { Sidebar } from "@/components/Sidebar";

const Advertising = () => (
  <div className="flex min-h-screen bg-[#f8f7f8]">
    <Sidebar />
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-mint bg-clip-text text-transparent">
        Advertising
      </h1>
    </main>
  </div>
);

export default Advertising;