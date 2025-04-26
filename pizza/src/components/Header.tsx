import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { WhatsAppButton } from './ui/WhatsAppButton';


export function Header() {

  const LogoImg = styled('img')({
    height: 60,
  });
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const menuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const menuClose = () => setAnchorEl(null);

  const scrollSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    menuClose();
  };

  return (
    <AppBar position="fixed" sx={{ height: '130px', bgcolor: 'primary.main', justifyContent: 'center' }}>
      <Toolbar sx={{ px: { xs: 2, md: 6 } }}>

        <Box display={{ xs: 'flex', md: 'none' }} alignItems="center">
          <IconButton onClick={menuOpen}>
            <img src="/hamburguer.svg" alt="Menu" width={30} height={30} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={menuClose}>
            <MenuItem onClick={() => scrollSection('bloco1')}>Bloco 1</MenuItem>
            <MenuItem onClick={() => scrollSection('faq')}>FAQ</MenuItem>
            <MenuItem onClick={() => scrollSection('contato')}>CONTATO</MenuItem>
            </Menu>
        </Box>

        <Box flex={{ xs: 1, md: 'none' }} display="flex" alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}
          sx={{ position: { xs: 'absolute', md: 'static' }, left: { xs: '50%', md: 'auto' }, transform: { xs: 'translateX(-50%)', md: 'none' }, width: { xs: '100%', md: 'auto' }, pointerEvents: 'none' }}>
          <LogoImg src="/logo.svg" alt="Pizza Logo" />
        </Box>

        <Box flex={1} display={{ xs: 'none', md: 'flex' }} justifyContent="center" alignItems="center"gap={4}>
          {['Bloco 1', 'FAQ', 'CONTATO'].map((text) => (
            <Typography key={text} variant="button"
              onClick={() => {
                const el = document.getElementById(text.toLowerCase().replace(/\s/g, ''));
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}              
              sx={{color: '#fff',fontWeight: 600,cursor: 'pointer',
                ':hover': { textDecoration: 'underline',textDecorationColor: 'white'},}}>
              {text}
            </Typography>
          ))}
        </Box>

        <Box display={{ xs: 'none', md: 'flex' }} alignItems="center">
          <WhatsAppButton color="black" bgColor="white" />
        </Box>

      </Toolbar>
    </AppBar>
  );
}