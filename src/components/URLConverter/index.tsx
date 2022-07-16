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

  return (
    <div>
      <h2>URL Converter</h2>
      <input type="url" onChange={(e) => { setUrl(e.currentTarget.value) }} />
      <div>
        {convert(url)}
      </div>
    </div>
  )
}

export { URLConverter }
