// ============================================================================
//  SOTI TRAINING PORTAL — CONFIGURATION
//  This is the ONLY file you normally need to edit to get set up.
// ============================================================================

// --- 1. Your Firebase project config -----------------------------------------
// These values are NOT secret; security is enforced by login + Firestore rules.
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC44QJwIB3AU6b8e4TrFykt0-bfDzdeANc",
  authDomain: "training-portal-20f93.firebaseapp.com",
  projectId: "training-portal-20f93",
  storageBucket: "training-portal-20f93.firebasestorage.app",
  messagingSenderId: "1057649568343",
  appId: "1:1057649568343:web:e982b3ea6c08c755d91112"
};

// --- 2. Instructor (admin) email addresses ------------------------------------
// Anyone who logs in with one of these emails gets the admin panel.
// This MUST match the ADMIN_EMAILS list inside your Firestore security rules.
export const ADMIN_EMAILS = [
  "emmanuelnevill@gmail.com"
];
