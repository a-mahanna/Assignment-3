import { auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export function waitForAuth() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}
