import { useRouter } from 'next/router'
import { Box, Container, Heading } from '@chakra-ui/react'
import { SignInScreen } from '@/components/Auth'
import { useUser } from '@/hooks/useUser'

const SignInPage = () => {
  const router = useRouter()
  const { user } = useUser()

  if (user)
    router.push('/')

  return (
    <Box width="100%" margin={8}>
      <Heading as="h2" size="xl" paddingY={4}>Sign in</Heading>
      <Container maxW="container.lg">
        <SignInScreen />
      </Container>
    </Box>
  )
}

export default SignInPage
