import { Box, Typography } from '@mui/material';
import { WhatsAppButton } from './ui/WhatsAppButton';

export function Duvidas() {
  return (
    <Box id="contato" component="section" sx={{ display: 'flex', justifyContent: 'center', px: 2, mt: { xs: '40px', md: '87px' } }}>
      
      <Box sx={{maxWidth: '1200px',width: '100%',border: '1px solid #e0e0e0',borderRadius: '16px',py: { xs: 4, md: 6 },px: { xs: 2, md: 4 },textAlign: 'center'}}>
        
        <Typography variant="h6" fontWeight={700} mb={2}>Ainda tem dúvidas sobre Pizza?</Typography>
        
        <Typography variant="body1" color="text.secondary" mb={4} sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}>
          Entre em contato direto com nossos atendentes.
        </Typography>
       
        <Box display="flex" justifyContent="center">
          <WhatsAppButton text="Entrar em contato" icon="/Whitewhatsapp.svg" />
        </Box>
      
      </Box>
    </Box>
  );
}