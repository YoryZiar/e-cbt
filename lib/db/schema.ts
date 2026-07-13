import { pgTable, uuid, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// 1. Profiles Table
export const profiles = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().unique(), // Link ke Next-Auth/Auth session
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  telephone: varchar("telephone", { length: 20 }),
  role: integer("role").default(1).notNull(), // level otorisasi: 1 = user, 2 = admin
  password: text("password").notNull(), // Hash password
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 2. Jurnals Table
export const jurnals = pgTable("jurnals", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").references(() => profiles.userId, { onDelete: "cascade" }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 3. Comments Table
export const comments = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  jurnalId: uuid("jurnal_id").references(() => jurnals.id, { onDelete: "cascade" }).notNull(),
  userId: text("user_id").references(() => profiles.userId, { onDelete: "cascade" }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 4. Messages Table
export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relationships
export const profilesRelations = relations(profiles, ({ many }) => ({
  jurnals: many(jurnals),
  comments: many(comments),
}));

export const jurnalsRelations = relations(jurnals, ({ one, many }) => ({
  author: one(profiles, { fields: [jurnals.userId], references: [profiles.userId] }),
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  jurnal: one(jurnals, { fields: [comments.jurnalId], references: [jurnals.id] }),
  author: one(profiles, { fields: [comments.userId], references: [profiles.userId] }),
}));
