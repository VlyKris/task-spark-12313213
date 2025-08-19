import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { CheckCircle, Circle, ListTodo } from "lucide-react";
import { useQuery } from "convex/react";

export function TodoStats() {
  const stats = useQuery(api.todos.getTodoStats);

  if (!stats) {
    return null;
  }

  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 bg-card rounded-lg border text-center">
        <ListTodo className="w-8 h-8 mx-auto mb-2 text-primary" />
        <div className="text-2xl font-bold">{stats.total}</div>
        <div className="text-sm text-muted-foreground">Total</div>
      </div>
      
      <div className="p-4 bg-card rounded-lg border text-center">
        <Circle className="w-8 h-8 mx-auto mb-2 text-blue-500" />
        <div className="text-2xl font-bold">{stats.active}</div>
        <div className="text-sm text-muted-foreground">Active</div>
      </div>
      
      <div className="p-4 bg-card rounded-lg border text-center">
        <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
        <div className="text-2xl font-bold">{stats.completed}</div>
        <div className="text-sm text-muted-foreground">Completed</div>
      </div>
      
      <div className="p-4 bg-card rounded-lg border text-center">
        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
          %
        </div>
        <div className="text-2xl font-bold">{completionRate}%</div>
        <div className="text-sm text-muted-foreground">Complete</div>
      </div>
    </motion.div>
  );
}
