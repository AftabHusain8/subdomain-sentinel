import type { SubdomainResult } from "@/lib/subdomain-scanner";

interface FilterTabsProps {
  results: SubdomainResult[];
  filter: string;
  onFilterChange: (f: string) => void;
}

const FilterTabs = ({ results, filter, onFilterChange }: FilterTabsProps) => {
  const active = results.filter((r) => r.status === "active").length;
  const inactive = results.filter((r) => r.status === "inactive").length;

  const tabs = [
    { key: "all", label: "All", count: results.length },
    { key: "active", label: "Active", count: active },
    { key: "inactive", label: "Inactive", count: inactive },
  ];

  return (
    <div className="flex gap-1 bg-secondary rounded-lg p-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onFilterChange(t.key)}
          className={`px-4 py-1.5 rounded-md text-xs font-mono transition-all ${
            filter === t.key
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t.label} ({t.count})
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
