import { Button } from '@chakra-ui/react'
import { signOut } from '@firebase/auth'
import { getAuthenticate } from '@/lib/firebase'
import { useUser } from '@/hooks/useUser'

const SignOutButton = () => {
  const { user, loading } = useUser()
  if (loading || user.isAnonymous)
    return null
  return (
    <Button onClick={() => { signOut(getAuthenticate()) }}>
      Sign out
    </Button>
  )
}

export { SignOutButton }
