import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get all todos for the current user
export const getTodos = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    return await ctx.db
      .query("todos")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

// Get todos by completion status
export const getTodosByStatus = query({
  args: { completed: v.boolean() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    return await ctx.db
      .query("todos")
      .withIndex("by_user_id_and_completed", (q) => 
        q.eq("userId", userId).eq("completed", args.completed)
      )
      .order("desc")
      .collect();
  },
});

// Create a new todo
export const createTodo = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    return await ctx.db.insert("todos", {
      title: args.title,
      description: args.description,
      completed: false,
      userId,
    });
  },
});

// Update a todo
export const updateTodo = mutation({
  args: {
    id: v.id("todos"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    completed: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new Error("Todo not found");
    }

    if (todo.userId !== userId) {
      throw new Error("Not authorized to update this todo");
    }

    const updates: any = {};
    if (args.title !== undefined) updates.title = args.title;
    if (args.description !== undefined) updates.description = args.description;
    if (args.completed !== undefined) updates.completed = args.completed;

    return await ctx.db.patch(args.id, updates);
  },
});

// Delete a todo
export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new Error("Todo not found");
    }

    if (todo.userId !== userId) {
      throw new Error("Not authorized to delete this todo");
    }

    return await ctx.db.delete(args.id);
  },
});

// Toggle todo completion status
export const toggleTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new Error("Todo not found");
    }

    if (todo.userId !== userId) {
      throw new Error("Not authorized to update this todo");
    }

    return await ctx.db.patch(args.id, {
      completed: !todo.completed,
    });
  },
});

// Get todo statistics
export const getTodoStats = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    const todos = await ctx.db
      .query("todos")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .collect();

    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;

    return { total, completed, active };
  },
});
