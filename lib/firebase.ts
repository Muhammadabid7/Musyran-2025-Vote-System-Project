import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, initializeFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "YOUR-API",
  authDomain: "YOUR-AUTH-DOMAIN",
  projectId: "YOUR-PROJECTID",
  storageBucket: "YOUR-STORAGE-BUCKET",
  messagingSenderId: "YOUR-MESSAGING-SENDER-ID",
  appId: "YOUR-APP-ID",
  measurementId: "YOUR-MEASURREMENT-ID",
}

// Initialize Firebase (singleton pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// Use long polling to better handle restricted networks (e.g., dev env without full Internet access).
let db
try {
  db = initializeFirestore(app, { experimentalForceLongPolling: true, useFetchStreams: false })
} catch (error) {
  db = getFirestore(app)
}
const auth = getAuth(app)

export { app, db, auth }
