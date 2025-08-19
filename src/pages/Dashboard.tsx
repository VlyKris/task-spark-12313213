// TODO: THIS IS THE DEFAULT DASHBOARD PAGE THAT THE USER WILL SEE AFTER AUTHENTICATION. ADD MAIN FUNCTIONALITY HERE.
// This is the entry point for users who have just signed in

import { Protected } from "@/lib/protected-page";
import { TodoFilters } from "@/components/todo/TodoFilters";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoList } from "@/components/todo/TodoList";
import { TodoStats } from "@/components/todo/TodoStats";
import { UserButton } from "@/components/auth/UserButton";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { ListTodo } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const { user } = useAuth();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  return (
    <Protected>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <motion.header
          className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm border-b"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ListTodo className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TodoMaster</span>
            </div>
            <UserButton />
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name || "there"}! 👋
            </h1>
            <p className="text-gray-600">
              Let's see what you need to accomplish today.
            </p>
          </motion.div>

          {/* Stats */}
          <TodoStats />

          {/* Add Todo Form */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TodoForm />
          </motion.div>

          {/* Filters */}
          <TodoFilters currentFilter={filter} onFilterChange={setFilter} />

          {/* Todo List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TodoList filter={filter} />
          </motion.div>
        </main>
      </div>
    </Protected>
  );
}