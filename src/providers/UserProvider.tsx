import { useState, useEffect } from 'react'
import { onAuthStateChanged } from '@firebase/auth'
import type { User } from '@firebase/auth'
import { getAuthenticate } from '@/lib/firebase'
import { UserContext } from '@/contexts/UserContext'

const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(getAuthenticate(), (user) => {
      setLoading(true)
      if (user) {
        setUser(user)
      } else {
        setUser(user)
      }
      setLoading(false)
    })
  })

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider }
export type { User }
