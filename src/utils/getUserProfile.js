import { db } from '@/firebase'
import { getDoc, doc } from 'firebase/firestore'

export async function getUserProfile(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  return snap.exists() ? snap.data().role : null
}
