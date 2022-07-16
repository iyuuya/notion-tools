import type { FirebaseApp } from '@firebase/app'
import { initializeApp, getApps } from '@firebase/app'

import { getConfig } from './config'

const getApp = (): FirebaseApp => {
  return getApps()[0] || initializeApp(getConfig())
}

export { getApp }
