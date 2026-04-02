import { useState } from "react";
import { Search, Loader2, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DomainInputProps {
  onScan: (domain: string) => void;
  onStop: () => void;
  isScanning: boolean;
}

const DomainInput = ({ onScan, onStop, isScanning }: DomainInputProps) => {
  const [domain, setDomain] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "").trim();
    if (cleaned) onScan(cleaned);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-mono">
          $&gt;
        </span>
        <Input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter target domain (e.g. example.com)"
          className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground font-mono focus-visible:ring-primary"
          disabled={isScanning}
        />
      </div>
      {isScanning ? (
        <Button type="button" onClick={onStop} variant="destructive" className="font-mono gap-2">
          <Square className="w-4 h-4" />
          Stop
        </Button>
      ) : (
        <Button type="submit" disabled={!domain.trim()} className="font-mono gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Search className="w-4 h-4" />
          Enumerate
        </Button>
      )}
    </form>
  );
};

export default DomainInput;
