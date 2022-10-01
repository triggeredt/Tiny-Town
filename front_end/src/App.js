import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import RoutesJs from './routes/RouteList';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <RoutesJs />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
