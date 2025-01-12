import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { Hono } from "hono";
import { projects, contactSubmissions } from "./db/schema";
import { setupSwagger } from "./swagger";

export type Env = {
  DATABASE_URL: string;
};
const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/projects", async (c) => {
  const sql = neon(c.env.DATABASE_URL);

  const db = drizzle(sql);

  const allProjects = await db.select().from(projects);
  return c.json(allProjects);
});

app.post("/contact", async (c) => {
  const { name, email, message } = await c.req.json();
  const sql = neon(c.env.DATABASE_URL);
  const db = drizzle(sql);

  await db.insert(contactSubmissions).values({
    name,
    email,
    message,
  });

  return c.json({ success: true });
});

setupSwagger(app);

export default app;
