import { Box } from '@mui/material';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import { Bloco1 } from './components/Bloco1';
import { Faq } from './components/Faq';
import { Duvidas } from './components/Duvidas';
import { Mensagem } from './components/Mensagem';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      
      <Header />
      
      <Box sx={{ paddingTop: '130px' }}>
        <Banner />
        <Bloco1 />
        <Faq />
        <Duvidas />
        <Mensagem />
      </Box>
    
      <Footer />
    
    </Box>
  );
}

export default App;
