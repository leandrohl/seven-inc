import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
