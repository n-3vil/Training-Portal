# SOTI Training Portal

A free, static training portal for students / new hires, hosted on GitHub Pages. Students sign in with a personal access code and see their training plan, homework (with your grades and feedback), and tasks. You sign in as admin and manage everything from a built-in admin panel — add tasks and homework, grade, mark progress — with changes saved straight to the repo. No server, no database, no cost.

## Publish it (one-time setup)

1. Create a **public** repo and upload `index.html`, `README.md`, and the `data` folder (the four JSON files must live inside a folder called `data`).
2. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
3. Your site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## First-time configuration (important)

Open `data/students.json` on github.com and edit two things:

- **`adminCode`** — change `"CHANGE-ME-ADMIN"` to a private code only you know. This is your admin login.
- **`repo`** — set `owner`, `name`, and `branch` to match your repository (already set to `n-3vil` / `Training-Portal` / `main` — update if yours differs). The admin panel uses this to save changes.
- Each student has a **`code`** — this is what they log in with. Change the sample codes (`ALEX-2026`, `SAM-2026`) or add your own students.

## How students use it

Give each student their personal access code. They open the site, enter the code, and see only their own overview, plan, homework, and tasks. The code is remembered for the browser session.

## How you (admin) use it

1. On the site, enter your **admin code** to open the admin panel.
2. Go to **Settings** and paste a **GitHub personal access token** (one-time per browser). Create a *fine-grained* token at GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens, scoped to **only this repository** with **Contents: Read and write**. It's stored only in your browser (localStorage), never in the repo.
3. Use the tabs to add students, assign homework, grade submissions, give tasks, and mark module progress. Edits show an "unsaved changes" bar — click **Save to GitHub** to commit. The live site updates within ~1 minute.

The **Training Plan** structure (modules/topics/links) is still edited directly in `data/plan.json` on github.com — everything else is done from the panel.

## Security note

This is a **public repository**, so access codes and all training data are technically visible to anyone who inspects the repo. It keeps honest people in their own view, but it is **not** real security. Use first names or initials and never store personal, sensitive, or confidential information. For true privacy you'd need a backend (e.g. Firebase) — ask and it can be set up.

## Tips

- JSON is strict: keep the double quotes and no trailing commas. The admin panel writes valid JSON for you; only hand-editing risks this.
- Test locally with `python3 -m http.server` in this folder, then open http://localhost:8000 (opening index.html straight from disk won't load the data files).
