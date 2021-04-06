import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBtIem7Om1yAY2OwgmH1cJ4Om-Da2W-r7g",
  authDomain: "whatsapp-tailwind.firebaseapp.com",
  projectId: "whatsapp-tailwind",
  storageBucket: "whatsapp-tailwind.appspot.com",
  messagingSenderId: "687415983817",
  appId: "1:687415983817:web:9f4731dba9a3f29f96d718"
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  auth,
  provider
}