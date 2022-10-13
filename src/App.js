import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from './components/Navbar'
import { theme } from './miscellaneous/theme'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Home/>
    </ChakraProvider>
  )
}
