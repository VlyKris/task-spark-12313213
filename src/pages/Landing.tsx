import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ListTodo, Plus, Zap } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <motion.nav
        className="w-full py-4 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ListTodo className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">TodoMaster</span>
          </div>
          <AuthButton />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Zap className="w-4 h-4" />
            Boost Your Productivity
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Organize Your Life with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}TodoMaster
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            The simple, powerful todo app that helps you stay focused and get things done. 
            Create, organize, and track your tasks with ease.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <AuthButton 
              trigger={
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Get Started Free
                </Button>
              }
            />
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to stay organized
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple yet powerful features to help you manage your tasks effectively
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Add</h3>
            <p className="text-gray-600">
              Quickly add new todos with titles and descriptions. Get your thoughts down fast.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Mark tasks as complete and track your progress with detailed statistics.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ListTodo className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Filters</h3>
            <p className="text-gray-600">
              Filter your todos by status to focus on what matters most right now.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gray-900 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get organized?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have transformed their productivity with TodoMaster.
          </p>
          <AuthButton 
            trigger={
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Start Your Journey
              </Button>
            }
          />
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-50 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ListTodo className="w-6 h-6 text-blue-600" />
            <span className="font-semibold">TodoMaster</span>
          </div>
          <p>&copy; 2024 TodoMaster. Built with ❤️ for productivity.</p>
        </div>
      </motion.footer>
    </div>
  );
}