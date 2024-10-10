import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { DatabaseWriter } from './_generated/server';

export const registerUser = mutation({
    args: {
        username: v.string(),
        password: v.string(),
    },
    handler: async (ctx: { db: DatabaseWriter }, args: { username: string; password: string }) => {
        const { username, password } = args;

        // Check if the user already exists
        const existingUser = await ctx.db.query("users").filter(q => q.eq("username", username)).first();
        if (existingUser) {
            throw new Error("Username already exists");
        }

        // Save the user with a hashed password
        const newUserId = await ctx.db.insert("users", {
            username,
            password: password,
        });

        return newUserId; // Return the new user ID
    },
});
