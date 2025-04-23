import { Button } from '@mui/material';
import { styled } from '@mui/system';

const WhatsIcon = styled('img')({
  height: 24,
  marginRight: 8,
});

interface WhatsAppButtonProps {
  text?: string;
  color?: string; // Cor do texto
  bgColor?: string; // Cor do fundo
}

export function WhatsAppButton({
  text = 'Entre em contato',
  color = '#fff', // Cor do texto padrão (branco)
  bgColor = '#25D366', // Cor do fundo padrão (verde do WhatsApp)
}: WhatsAppButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: bgColor,
        color,
        fontWeight: 600,
        borderRadius: '8px',
        textTransform: 'none',
        boxShadow: 'none',
        px: 3,
        '&:hover': {
          backgroundColor: '#f5f5f5',
          boxShadow: 'none',
        },
      }}
      startIcon={<WhatsIcon src="/whatsapp.svg" alt="WhatsApp" />}
    >
      {text}
    </Button>
  );
}