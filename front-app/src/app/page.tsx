import { Dashboard } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Central-Cinema website",
  description: "This is Code-Roaster's first team project",
};

export default function Home() {
  return (
    <main className=" z-0 w-full bg-slate-900">
      <div className="pt-10">
        <Dashboard />
      </div>
    </main>
  );
}
