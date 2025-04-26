import { Button } from '@mui/material';
import { styled } from '@mui/system';

const WhatsIcon = styled('img')({
  height: 24,
  marginRight: 8,
});

interface WhatsAppButtonProps {
  text?: string;
  color?: string;
  bgColor?: string;
  icon?: string; 
}

export function WhatsAppButton({
  text = 'Entre em contato',
  color = '#fff',
  bgColor = '#25D366',
  icon = '/whatsapp.svg'
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const url = 'https://wa.me/5545988041417?text=Oi%20mensagem%0A';
    window.open(url, '_blank');
  };

  return (
    <Button onClick={handleClick} variant="contained"
      sx={{
        backgroundColor: bgColor,
        color,
        fontWeight: 600,
        borderRadius: '8px',
        textTransform: 'none',
        boxShadow: 'none',
        whiteSpace: 'nowrap',
        minWidth: 'fit-content',
        px: 3,
        '&:hover': {
          backgroundColor: bgColor, 
          opacity: 0.9,
        },
      }}
      startIcon={<WhatsIcon src={icon} alt="WhatsApp" />}
    >
      {text}
    </Button>
  );
}
