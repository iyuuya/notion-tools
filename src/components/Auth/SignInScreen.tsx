import { Box } from '@chakra-ui/react'
import { onAuthStateChanged, EmailAuthProvider, GithubAuthProvider } from '@firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { getAuthenticate } from '@/lib/firebase'

const SignInScreen = () => {
  const auth = getAuthenticate()
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  return (
    <Box padding={8}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Box>
  )
}

export { SignInScreen }
