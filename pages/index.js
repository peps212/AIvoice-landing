import { Inter } from 'next/font/google'
import Hero2 from './components/hero2'
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <ChakraProvider>
    <Hero2></Hero2 >

  </ChakraProvider>
  )
}
