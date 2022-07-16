import { Button } from '@chakra-ui/react'
import { signOut } from '@firebase/auth'
import { getAuthenticate } from '@/lib/firebase'

const SignOutButton = () => {
  return (
    <Button onClick={() => { signOut(getAuthenticate()) }}>
      Sign out
    </Button>
  )
}

export { SignOutButton }
