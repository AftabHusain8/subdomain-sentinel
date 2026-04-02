import { useState, useRef, useCallback } from "react";
import ScannerHeader from "@/components/ScannerHeader";
import DomainInput from "@/components/DomainInput";
import StatsCards from "@/components/StatsCards";
import ScanProgress from "@/components/ScanProgress";
import FilterTabs from "@/components/FilterTabs";
import ResultsTable from "@/components/ResultsTable";
import { DEFAULT_WORDLIST, enumerateSubdomains, type SubdomainResult } from "@/lib/subdomain-scanner";

const Index = () => {
  const [results, setResults] = useState<SubdomainResult[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [filter, setFilter] = useState("all");
  const abortRef = useRef(false);

  const handleScan = useCallback(async (domain: string) => {
    setResults([]);
    setIsScanning(true);
    setFilter("all");
    abortRef.current = false;

    const generator = enumerateSubdomains(domain, DEFAULT_WORDLIST, 8);

    for await (const result of generator) {
      if (abortRef.current) break;
      setResults((prev) => [...prev, result]);
    }

    setIsScanning(false);
  }, []);

  const handleStop = useCallback(() => {
    abortRef.current = true;
    setIsScanning(false);
  }, []);

  return (
    <div className="min-h-screen bg-background scanline">
      <ScannerHeader />
      <main className="container max-w-6xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-card border border-border rounded-lg p-6 glow-border space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            TARGET ACQUISITION
          </div>
          <DomainInput onScan={handleScan} onStop={handleStop} isScanning={isScanning} />
        </div>

        <StatsCards results={results} totalWordlist={DEFAULT_WORDLIST.length} isScanning={isScanning} />
        <ScanProgress current={results.length} total={DEFAULT_WORDLIST.length} isScanning={isScanning} />

        <div className="flex items-center justify-between">
          <FilterTabs results={results} filter={filter} onFilterChange={setFilter} />
          <span className="text-xs font-mono text-muted-foreground">
            {results.filter((r) => r.status === "active").length} live targets found
          </span>
        </div>

        <ResultsTable results={results} filter={filter} />

        <footer className="text-center text-xs text-muted-foreground font-mono py-4 border-t border-border">
          Developed by Aftab Husain • Subdomain Enumerator with Live Check • Academic Project
        </footer>
      </main>
    </div>
  );
};

export default Index;
