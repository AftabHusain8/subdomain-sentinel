import { Shield, Terminal } from "lucide-react";

const ScannerHeader = () => (
  <header className="border-b border-border py-6">
    <div className="container max-w-6xl mx-auto px-4 flex items-center gap-4">
      <div className="p-2 rounded-lg bg-primary/10 glow-border">
        <Shield className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h1 className="text-2xl font-display font-bold text-primary glow-green flex items-center gap-2">
          <Terminal className="w-5 h-5" />
          SubEnum
          <span className="text-muted-foreground text-sm font-mono font-normal ml-2">v1.0</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          Subdomain Enumerator with Live Check
        </p>
      </div>
      <div className="ml-auto text-xs text-muted-foreground font-mono">
        by <span className="text-primary/70">Aftab Husain</span>
      </div>
    </div>
  </header>
);

export default ScannerHeader;
