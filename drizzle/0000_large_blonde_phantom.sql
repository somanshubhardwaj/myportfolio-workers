CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"description" text,
	"backgroundUrl" text,
	"href" text,
	"git" text
);

CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"message" text
);
