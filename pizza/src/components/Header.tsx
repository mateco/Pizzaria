import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { WhatsAppButton } from './ui/WhatsAppButton';

const LogoImg = styled('img')({
  height: 60,
});

export function Header() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'primary.main', 
        height: '130px', 
        width: '100vw', 
        justifyContent: 'center' 
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          px: { xs: 2, md: 8 },
          height: '100%',
        }}
      >
        <Box 
          display="flex" 
          width="100%" 
          justifyContent="space-between" 
          alignItems="center"
        >
          {/* Logo */}
          <Box 
            flex={1} 
            display="flex" 
            justifyContent={{ xs: 'flex-start', md: 'center' }} 
            alignItems="center"
          >
            <LogoImg src="/logo.svg" alt="Pizza Logo" />
          </Box>

          {/* Links */}
          <Box 
            flex={2} 
            display={{ xs: 'none', md: 'flex' }} 
            justifyContent="center" 
            alignItems="center" 
            gap={4}
          >
            <Typography
              variant="button"
              sx={{
                color: '#fff',
                fontWeight: 600,
                textTransform: 'none',
                cursor: 'pointer',  // Aplica o cursor de mãozinha
                ':hover': {
                  textDecoration: 'underline',  // Adiciona o sublinhado
                  textDecorationColor: 'white', // Garante que o sublinhado será branco
                },
              }}
            >
              Bloco 1
            </Typography>

            <Typography
              variant="button"
              sx={{
                color: '#fff',
                fontWeight: 600,
                ':hover': {
                  textDecoration: 'underline',  // Adiciona o sublinhado
                  textDecorationColor: 'white', // Garante que o sublinhado será branco
                  cursor: 'pointer',           // Altera o cursor para a "mãozinha"
                },
              }}
            >
              FAQ
            </Typography>

            <Typography
              variant="button"
              sx={{
                color: '#fff',
                fontWeight: 600,
                ':hover': {
                  textDecoration: 'underline',  // Adiciona o sublinhado
                  textDecorationColor: 'white', // Garante que o sublinhado será branco
                  cursor: 'pointer',           // Altera o cursor para a "mãozinha"
                },
              }}
            >
              CONTATO
            </Typography>
          </Box>

          {/* Botão WhatsApp */}
          <Box 
            flex={1} 
            display="flex" 
            justifyContent={{ xs: 'flex-end', md: 'center' }} 
            alignItems="center"
          >
            <WhatsAppButton color="black" bgColor="white" />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
