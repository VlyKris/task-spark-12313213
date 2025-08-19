import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface TodoFiltersProps {
  currentFilter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

export function TodoFilters({ currentFilter, onFilterChange }: TodoFiltersProps) {
  const filters = [
    { key: "all" as const, label: "All" },
    { key: "active" as const, label: "Active" },
    { key: "completed" as const, label: "Completed" },
  ];

  return (
    <motion.div
      className="flex gap-2 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={currentFilter === filter.key ? "default" : "outline"}
          onClick={() => onFilterChange(filter.key)}
          className="flex-1"
        >
          {filter.label}
        </Button>
      ))}
    </motion.div>
  );
}
