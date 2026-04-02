import { Progress } from "@/components/ui/progress";

interface ScanProgressProps {
  current: number;
  total: number;
  isScanning: boolean;
}

const ScanProgress = ({ current, total, isScanning }: ScanProgressProps) => {
  if (!isScanning && current === 0) return null;

  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-mono text-muted-foreground">
        <span>{isScanning ? "Scanning..." : "Scan complete"}</span>
        <span>{pct}%</span>
      </div>
      <Progress value={pct} className="h-2 bg-secondary [&>div]:bg-primary" />
    </div>
  );
};

export default ScanProgress;
