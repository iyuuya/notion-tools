import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import { URLConverter } from '@/components/URLConverter'
import { SignOutButton } from '@/components/Auth'
import { useUser } from '@/hooks/useUser'

const HomePage = () => {
  const { user, loading } = useUser()

  return (
    <Box width="100%" margin={8}>
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" paddingY={4}>iyuuya&apos;s Notion tools</Heading>

        {(!loading && user) &&
          <Box width="100%" marginTop={2}>
            <Flex justify="flex-end">
              <SignOutButton />
            </Flex>
          </Box>
        }

        <URLConverter />
      </Container>
    </Box>
  )
}

export default HomePage
