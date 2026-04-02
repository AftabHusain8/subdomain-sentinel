import { Globe, CheckCircle, XCircle, Clock } from "lucide-react";
import type { SubdomainResult } from "@/lib/subdomain-scanner";

interface StatsCardsProps {
  results: SubdomainResult[];
  totalWordlist: number;
  isScanning: boolean;
}

const StatsCards = ({ results, totalWordlist, isScanning }: StatsCardsProps) => {
  const active = results.filter((r) => r.status === "active").length;
  const inactive = results.filter((r) => r.status === "inactive").length;
  const avgTime = results.length
    ? Math.round(results.reduce((s, r) => s + (r.responseTime || 0), 0) / results.length)
    : 0;

  const cards = [
    { label: "Scanned", value: `${results.length}/${totalWordlist}`, icon: Globe, color: "text-primary" },
    { label: "Active", value: active, icon: CheckCircle, color: "text-primary" },
    { label: "Inactive", value: inactive, icon: XCircle, color: "text-destructive" },
    { label: "Avg Response", value: `${avgTime}ms`, icon: Clock, color: "text-info" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {cards.map((c) => (
        <div key={c.label} className="bg-card border border-border rounded-lg p-4 glow-border">
          <div className="flex items-center gap-2 mb-1">
            <c.icon className={`w-4 h-4 ${c.color}`} />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</span>
          </div>
          <p className={`text-2xl font-display font-bold ${c.color}`}>{c.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
