import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box component="footer" sx={{width: '100%',bgcolor: 'primary.main',pt: 8,pb: 6,display: 'flex',flexDirection: 'column',alignItems: 'center',gap: 8,}}>
      
      <Box component="img" src="/logo.svg" alt="Logo" sx={{height: 60}}/>

      <Typography variant="body2" align="center" color="#fff" sx={{ fontWeight: 600 }}>
        Endereço <br />
        Av. Brasil, 74 - Foz do Iguaçu - CEP<br/> 85851-000
      </Typography>
    
    </Box>
  );
};
