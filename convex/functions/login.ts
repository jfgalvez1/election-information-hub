import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const loginUser = mutation({
    args: {
        username: v.string(),
        password: v.string(),
    },
    handler: async (ctx, args) => {
        const { username, password } = args;

        // Fetch the user by username
        const user = await ctx.db.query("users").filter(q => q.eq("username", username)).first();
        if (!user) {
            throw new Error("Invalid username or password");
        }

        return { message: "Login successful", userId: user._id };
    },
});
