# SOTI Training Portal — secure (Firebase) version

Real logins and private data. Students sign in with their own email + password and see only their own plan, homework, grades, and tasks. You sign in with your instructor email and get an admin panel. Data lives in Google Firebase (free), the site stays on GitHub Pages (free). No one can read another person's data, and only you can grade.

---

## What you'll do (once, ~15 minutes)

Part A — create a free Firebase project (the secure backend)
Part B — paste 2 things into `firebase-config.js`
Part C — publish the files to GitHub Pages (like before)

You do NOT need a credit card. Everything here is on Firebase's free "Spark" plan.

---

## Part A — Firebase project

1. Go to https://console.firebase.google.com and sign in with a Google account. Click **Add project** (or **Create a project**). Give it a name like `soti-training`. You can turn Google Analytics **off**. Click through to **Create project**.

2. **Add a web app.** On the project home, click the **`</>`** (web) icon. Give it a nickname (e.g. `portal`), do NOT tick "Firebase Hosting", click **Register app**. Firebase shows you a `firebaseConfig = { ... }` block — keep this tab open, you'll copy it in Part B.

3. **Turn on Authentication.** Left menu → **Build → Authentication → Get started**. Under **Sign-in method**, click **Email/Password**, toggle it **Enable**, then **Save**.

4. **Create the database.** Left menu → **Build → Firestore Database → Create database**. Choose a location near you, and start in **Production mode** (we set exact rules next). Click **Create/Enable**.

5. **Publish the security rules.** In Firestore, open the **Rules** tab. Delete everything there and paste the entire contents of the `firestore.rules` file from this folder. **Before publishing**, change the email inside `isAdmin()` to your instructor email (it currently says `emmanuelnevill@gmail.com`). Click **Publish**.

---

## Part B — fill in `firebase-config.js`

Open `firebase-config.js` in a text editor and set:

1. **FIREBASE_CONFIG** — copy each value from the `firebaseConfig` block Firebase showed you in step A2 (apiKey, authDomain, projectId, etc.). These values are not secret; your data is protected by the login + the rules.
2. **ADMIN_EMAILS** — put your instructor email here. It must exactly match the email you used inside `isAdmin()` in `firestore.rules`.

Save the file.

---

## Part C — publish to GitHub Pages

Upload these three files to your repo (root level, next to each other): `index.html`, `firebase-config.js`, `README.md`. (You can delete the old `data/` folder and the old `index.html` from the code-based version — they're not used anymore.)

Then it's already on Pages at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

**One extra step:** tell Firebase to trust your site. Firebase console → **Authentication → Settings → Authorized domains → Add domain** → enter `YOUR-USERNAME.github.io`. (Localhost is allowed by default for testing.)

---

## Using it

**You (instructor):** open the site, click **Register**, sign up with your instructor email + a password. Because your email is in the admin list, you land straight in the admin panel. First time, the Students tab shows an **Initialize portal** button — click it to create your cohort name and a starter 4-module plan (all editable on the Training Plan tab).

**Students:** share your site link. Each student clicks **Register**, enters their name, email, and a password. They'll see a "waiting for instructor" screen until you activate them: go to your **Students** tab, find them under "awaiting activation", and click **Activate**. Then assign homework/tasks and grade.

**Everyday admin actions:** add/grade homework, give tasks, mark module progress, edit the plan — all from the tabs. Every change saves to Firebase instantly (no separate "save" step, no GitHub token needed anymore).

**Students** can update their own task progress; only you can grade homework.

---

## Notes

- Forgot passwords: students click "Forgot password?" on the login screen to get a reset email.
- Add another instructor: add their email to both `ADMIN_EMAILS` in `firebase-config.js` and the `isAdmin()` list in `firestore.rules` (re-publish rules).
- Free limits (Spark plan) are far above what a training cohort uses (tens of thousands of reads/writes per day).
- Security: a student cannot read anyone else's data or grades — the Firestore rules enforce it on the server, not just in the page.
