import { Box, Container, Heading } from '@chakra-ui/react'

import { URLConverter } from '@/components/URLConverter'

const HomePage = () => {
  return (
    <Box width="100%" margin={8}>
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" paddingY={4}>iyuuya&apos;s Notion tools</Heading>
        <URLConverter />
      </Container>
    </Box>
  )
}

export default HomePage
