import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    profile: defineTable({
        headline: v.string(),
        shortBio: v.string(),
    }),
    job: defineTable({
        name: v.string(),
        jobTitle: v.string(),
        logo: v.string(),
        url: v.string(),
        description: v.string(),
        startDate: v.string(),
        endDate: v.string(),
    }),
});
