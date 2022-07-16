import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@/providers/UserProvider'

const App = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
