import { Box, Stack, Heading, Input, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react'

import { useState } from 'react'

const convert = (url: string) => {
  if (url.includes('https://www.notion.so/image/')) {
    url = url.replaceAll('https://www.notion.so/image/', '')
    url = url.split('?')[0]
  }
  return decodeURIComponent(url)
}

const URLConverter = () => {
  const [url, setUrl] = useState('')
  const toast = useToast()

  return (
    <Box>
      <Heading>URL Converter</Heading>
      <Box marginTop={2}>
        <Stack>
          <Input
            type="url"
            placeholder="https://example.com/"
            onChange={(e) => { setUrl(e.currentTarget.value) }}
          />
          <InputGroup>
            <Input
              type="url"
              value={convert(url)}
              placeholder="https://converted.url/"
              isReadOnly={true}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => {
                const convertedURL = convert(url)
                navigator.clipboard.writeText(convertedURL)
                toast({
                  title: 'URL copied.',
                  description: convertedURL,
                  status: 'success',
                  duration: 5000,
                  isClosable: true
                })
              }}>
                Copy
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Box>
    </Box>
  )
}

export { URLConverter }
