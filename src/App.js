import { Box, Container } from '@chakra-ui/react';
import './App.css';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import { useEffect, useState } from 'react';



function App() {
  
  return (
    <Box className="App"
    // border={"2px solid green"}
    >
      {/* <Header /> */}
      <Main />
      <Footer />

    </Box>
  );
}

export default App;
