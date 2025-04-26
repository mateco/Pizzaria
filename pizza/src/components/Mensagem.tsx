import { Box, Button, TextField, Typography, useMediaQuery, useTheme, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

type FormFields = 'nome' | 'email' | 'mensagem';
type FormValues = Record<FormFields, string>;
type FormErrors = Record<FormFields, boolean>;

export function Mensagem() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [form, setForm] = useState<FormValues>({ nome: '', email: '', mensagem: '' });
  const [errors, setErrors] = useState<FormErrors>({ nome: false, email: false, mensagem: false });
  const [success, setSuccess] = useState(false);

  const mudaInput = (field: FormFields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.target.value });
    setErrors({ ...errors, [field]: false });
  };

  const validaInput = () => {
    const newErrors: FormErrors = {
      nome: !form.nome.trim(),
      email: !form.email.trim(),
      mensagem: !form.mensagem.trim()
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    
    setSuccess(true);
    setForm({ nome: '', email: '', mensagem: '' });
  };

  const fieldStyles = {
    '& .MuiOutlinedInput-root': { borderRadius: 2 },
    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#D1D5DB' }
  };

  const fields: { id: FormFields; label: string; multiline?: boolean; rows?: number }[] = [
    { id: 'nome', label: 'Primeiro Nome' },
    { id: 'email', label: 'Email' },
    { id: 'mensagem', label: 'Mensagem', multiline: true, rows: 4 }
  ];

  return (
    <Box component="section" sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: { xs: '48px', md: '86px' }, mb: { xs: '165px', md: '115px' } }}>
      <Box sx={{ width: '1216px', height: '667px', px: 2, py: 10, textAlign: 'center' }}>
        <Typography sx={{color: 'secondary.main',fontWeight: 600,fontSize: '14px',lineHeight: '20px',letterSpacing: 0,}}>Entre em Contato</Typography>

        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" mb={2}>
        <Typography sx={{fontWeight: 400,fontSize: { xs: '24px', md: '32px' },lineHeight: { xs: '140%', md: '130%' },letterSpacing: 0,textAlign: 'center',whiteSpace: 'pre-line',maxWidth: { xs: '328px', md: '100%' },mx: 'auto', mt: 1, mb: 2,}}>
          {isMobile
            ? 'Se desejar alguma\ninformação ou efetuar uma\ncompra com nossos\natendentes'
            : 'Fale com a nossa equipe especializada e adquira\nnossos serviços'}
        </Typography>
        </Box>

        <Typography component="p" sx={{ fontWeight: 400,fontSize: '16px',lineHeight: '24px',letterSpacing: 0,textAlign: 'center',color: 'text.secondary',whiteSpace: 'pre-line',mb: 4,}}>
          {isMobile
            ? 'Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae convallis.'
            : 'Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae convallis. Orci fringilla imperdiet\n malesuada ullamcorper facilisis.'}
        </Typography>


        <Box display="flex" flexDirection="column" gap={3} maxWidth={600} mx="auto">
          {fields.map((field) => (
            <Box key={field.id} textAlign="left">
              <Typography fontWeight={600} mb={1} sx={{ color: '#1D293F' }}>{field.label}</Typography>
              <TextField
                value={form[field.id]}
                onChange={mudaInput(field.id)}
                fullWidth
                error={errors[field.id]}
                helperText={errors[field.id] && 'Campo obrigatório'}
                variant="outlined"
                multiline={field.multiline}
                rows={field.rows}
                sx={fieldStyles}
              />
            </Box>
          ))}

          <Button variant="contained"size="large"
            onClick={validaInput}
            startIcon={<SendIcon />}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              bgcolor: 'secondary.main',
              color: '#fff',
              px: 4,
              py: 1.5,
              fontSize: '16px',
              '&:hover': { bgcolor: '#FF1900' },
              gap: 1.5}}>
            {isMobile ? 'Enviar Informações' : 'Enviar mensagem'}
          </Button>
        </Box>

        <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert severity="success" variant="filled" onClose={() => setSuccess(false)}>Mensagem enviada com sucesso!</Alert>
        </Snackbar>
        
      </Box>
    </Box>
  );
}