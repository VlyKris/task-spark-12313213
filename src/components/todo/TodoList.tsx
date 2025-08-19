import { api } from "@/convex/_generated/api";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "convex/react";
import { TodoItem } from "./TodoItem";
import { Loader2 } from "lucide-react";

interface TodoListProps {
  filter: "all" | "active" | "completed";
}

export function TodoList({ filter }: TodoListProps) {
  const allTodos = useQuery(api.todos.getTodos);
  const activeTodos = useQuery(api.todos.getTodosByStatus, { completed: false });
  const completedTodos = useQuery(api.todos.getTodosByStatus, { completed: true });

  let todos;
  let isLoading;

  switch (filter) {
    case "active":
      todos = activeTodos;
      isLoading = activeTodos === undefined;
      break;
    case "completed":
      todos = completedTodos;
      isLoading = completedTodos === undefined;
      break;
    default:
      todos = allTodos;
      isLoading = allTodos === undefined;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (!todos || todos.length === 0) {
    return (
      <motion.div
        className="text-center py-8 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {filter === "active" && "No active todos"}
        {filter === "completed" && "No completed todos"}
        {filter === "all" && "No todos yet. Create your first todo above!"}
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </AnimatePresence>
    </div>
  );
}
