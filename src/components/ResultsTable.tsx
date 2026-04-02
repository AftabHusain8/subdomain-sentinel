import { Loader2, CheckCircle, XCircle, AlertTriangle, ExternalLink } from "lucide-react";
import type { SubdomainResult } from "@/lib/subdomain-scanner";

interface ResultsTableProps {
  results: SubdomainResult[];
  filter: string;
}

const statusConfig = {
  checking: { icon: Loader2, className: "text-warning animate-spin", label: "Checking" },
  active: { icon: CheckCircle, className: "text-primary", label: "Active" },
  inactive: { icon: XCircle, className: "text-destructive", label: "Inactive" },
  restricted: { icon: AlertTriangle, className: "text-warning", label: "Restricted" },
  error: { icon: AlertTriangle, className: "text-destructive", label: "Error" },
};

const ResultsTable = ({ results, filter }: ResultsTableProps) => {
  const filtered = filter === "all" ? results : results.filter((r) => r.status === filter);

  if (results.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <p className="text-muted-foreground font-mono text-sm">
          $ Awaiting target domain...
        </p>
        <p className="text-muted-foreground/50 font-mono text-xs mt-2">
          Enter a domain above and click Enumerate to begin reconnaissance
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm font-mono">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="text-left px-4 py-3 text-muted-foreground uppercase tracking-wider text-xs">Status</th>
              <th className="text-left px-4 py-3 text-muted-foreground uppercase tracking-wider text-xs">Subdomain</th>
              <th className="text-left px-4 py-3 text-muted-foreground uppercase tracking-wider text-xs">IP Address</th>
              <th className="text-left px-4 py-3 text-muted-foreground uppercase tracking-wider text-xs">Code</th>
              <th className="text-left px-4 py-3 text-muted-foreground uppercase tracking-wider text-xs">Response</th>
              <th className="text-left px-4 py-3 text-muted-foreground uppercase tracking-wider text-xs"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => {
              const sc = statusConfig[r.status];
              const Icon = sc.icon;
              return (
                <tr key={r.fullDomain} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${sc.className}`} />
                      <span className={sc.className}>{sc.label}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-foreground">{r.fullDomain}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.ip || "—"}</td>
                  <td className="px-4 py-3">
                    {r.statusCode ? (
                      <span className={r.statusCode < 400 ? "text-primary" : "text-warning"}>
                        {r.statusCode}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {r.responseTime ? `${r.responseTime}ms` : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {r.status === "active" && (
                      <a
                        href={`https://${r.fullDomain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;
