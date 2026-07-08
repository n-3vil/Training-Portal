# Training Portal

A free, static training portal for students / new hires, hosted on GitHub Pages. Students pick their name and see their training plan, homework (with your grades and feedback), and tasks. You manage everything by editing 4 small JSON files — no server, no database, no cost.

## Publish it (one-time setup, ~5 minutes)

1. Go to https://github.com/new (create a free account first if needed).
2. Repository name: `training-portal` (or anything). Set it to **Public**. Click **Create repository**.
3. On the new repo page, click **uploading an existing file**, drag in `index.html`, `README.md`, and the `data` folder (drag the whole folder), then click **Commit changes**.
4. In the repo, go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** / **(root)**, and click **Save**.
5. Wait 1–2 minutes. Your site is live at:
   `https://YOUR-USERNAME.github.io/training-portal/`

Share that link with your students. Changes you commit appear on the site within a minute or two.

> Note: a public repo means the content is publicly visible. Use first names or initials for students and avoid personal data.

## How to update content

Edit the files in the `data` folder directly on github.com (open the file → pencil icon → edit → **Commit changes**).

### Add a student — `data/students.json`

```json
{ "id": "maria", "name": "Maria L.", "track": "QA", "startDate": "2026-08-01", "completedModules": [] }
```

`id` is the short key you'll use everywhere else. When a student finishes a module, add its id to `completedModules`, e.g. `["m1", "m2"]`.

### Edit the training plan — `data/plan.json`

Each module has an `id`, `week`, `title`, a list of `topics`, and optional `resources` (links). Add or remove modules freely.

### Assign homework — `data/homework.json`

```json
{
  "id": "hw4",
  "title": "Title of the assignment",
  "assignedTo": ["all"],
  "due": "2026-08-15",
  "description": "What they need to do.",
  "submitVia": "Email it to me.",
  "evaluations": {}
}
```

`assignedTo` is `["all"]` or a list of student ids like `["maria", "alex"]`.

### Evaluate homework — the `evaluations` block

When a student submits, and again when you grade, edit that homework's `evaluations`:

```json
"evaluations": {
  "maria": { "status": "submitted" },
  "alex":  { "status": "graded", "grade": "8/10", "feedback": "Good work, but be more specific in the repro steps." }
}
```

Valid `status` values: `pending` (or absent), `submitted`, `graded`.

### Give tasks — `data/tasks.json`

Same idea as homework but lighter — a `status` per student instead of grades:

```json
"status": { "maria": "in-progress", "alex": "done" }
```

Valid values: `not-started` (or absent), `in-progress`, `done`.

## Tips

- JSON is strict: keep the double quotes, and no comma after the last item in a list. If the site shows nothing after an edit, a missing/extra comma is the usual cause — GitHub's editor highlights errors.
- Test locally by running `python3 -m http.server` in this folder and opening http://localhost:8000 (opening index.html directly from disk won't load the data files).
- Students bookmark one link; the "I am" dropdown remembers their choice on their device.
