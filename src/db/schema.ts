import { serial, text, pgTable } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  backgroundUrl: text("backgroundUrl"),
  href: text("href"),
  git: text("git"),
});
