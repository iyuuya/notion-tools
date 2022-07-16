import type { Auth } from '@firebase/auth'
import { getAuth, signInWithEmailAndPassword, signOut } from '@firebase/auth'
import { getApp } from './app'

const getAuthenticate = (): Auth => {
  const auth = getAuth(getApp())
  auth.languageCode = 'ja'
  return auth
}
export { getAuthenticate }
