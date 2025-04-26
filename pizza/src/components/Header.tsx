import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { WhatsAppButton } from './ui/WhatsAppButton';

const LogoImg = styled('img')({ height: 60 });

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isXLarge = useMediaQuery('(min-width:1920px)');

  const menuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const menuClose = () => setAnchorEl(null);
  const scrollSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    menuClose();
  };

  return (
    <AppBar position="fixed" sx={{ height: '130px', bgcolor: 'primary.main', justifyContent: 'center' }}>
      
      <Toolbar sx={{ px: { xs: 2, md: 6 }, position: 'relative', minHeight: '130px !important' }}>
        
        <Box display={{ xs: 'flex', md: 'none' }} alignItems="center">
          <IconButton onClick={menuOpen}><img src="/hamburguer.svg" alt="Menu" width={30} height={30} /></IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={menuClose}>
            {['bloco1', 'faq', 'contato'].map((item) => (
              <MenuItem key={item} onClick={() => scrollSection(item)}>
                {item.toUpperCase()}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box flex={{ xs: 1, md: 'none' }}display="flex"alignItems="center"justifyContent={{ xs: 'center', md: 'flex-start' }}
          sx={{
            position: { xs: 'absolute', md: isXLarge ? 'absolute' : 'static' },
            left: { xs: '50%', md: isXLarge ? '352px' : 'auto' },
            transform: { xs: 'translateX(-50%)', md: isXLarge ? 'translateY(-50%)' : 'none' },
            top: isXLarge ? '50%' : 'auto',
            pointerEvents: 'none'}}>
          <LogoImg src="/logo.svg" alt="Pizza Logo" />
        </Box>

        <Box flex={1} display={{ xs: 'none', md: 'flex' }} justifyContent="center" alignItems="center" gap={4}>
          {['Bloco 1', 'FAQ', 'CONTATO'].map((text) => (
            <Typography key={text} variant="button"
              onClick={() => document.getElementById(text.toLowerCase().replace(/\s/g, ''))?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'none',
                ':hover': { textDecoration: 'underline', textDecorationColor: 'white' }}}>
              {text}
            </Typography>
          ))}
        </Box>

        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          position: isXLarge ? 'absolute' : 'static',
          right: isXLarge ? '352px' : 'auto',
          top: isXLarge ? '50%' : 'auto',
          transform: isXLarge ? 'translateY(-50%)' : 'none'
        }}>
          <WhatsAppButton color="black" bgColor="white" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}