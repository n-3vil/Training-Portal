// ============================================================================
//  SOTI TRAINING PORTAL — CONFIGURATION
//  This is the ONLY file you normally need to edit to get set up.
//  Fill in the two sections below. See README.md for exact steps.
// ============================================================================

// --- 1. Your Firebase project config -----------------------------------------
// Firebase console -> Project settings (gear icon) -> "Your apps" -> Web app ->
// copy the values from the "firebaseConfig" object it shows you.
// These values are NOT secret; security is enforced by login + Firestore rules.
export const FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// --- 2. Instructor (admin) email addresses ------------------------------------
// Anyone who logs in with one of these emails gets the admin panel.
// This MUST match the ADMIN_EMAILS list inside your Firestore security rules.
export const ADMIN_EMAILS = [
  "emmanuelnevill@gmail.com"
];
