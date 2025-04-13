import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAml2tsEcTvdM9SvIU6MT5nmNk42GIdlmQ',
  authDomain: 'charity-health-app.firebaseapp.com',
  projectId: 'charity-health-app',
  storageBucket: 'charity-health-app.firebasestorage.app',
  messagingSenderId: '782080343725',
  appId: '1:782080343725:web:d1bba9718fa62f73371024',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
