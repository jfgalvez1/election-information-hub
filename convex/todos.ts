import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const createTodo = mutation({
    args: { text: v.string() },
    handler: async (ctx, args) => {
        const newTaskId = await ctx.db.insert("todos", { text: args.text });
        return newTaskId;
    },
});

export const getTodos = query({
    handler: async (ctx) => {
        return ctx.db.query("todos").collect();
    },
})