import React from 'react'
import ReactDOM from 'react-dom'
import {ChakraProvider, CSSReset, ThemeProvider} from '@chakra-ui/react'
import theme from './theme'
import './index.css'
import App from './App'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
