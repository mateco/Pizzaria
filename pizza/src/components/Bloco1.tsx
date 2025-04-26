import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export function Bloco1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const imageSrc = isMobile ? '/Pizza_derretendo_mobile.svg' : '/Pizza_derretendo.svg';

  return (
    <Box id="bloco1" component="section" sx={{
      display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'flex-start', md: 'space-between' },
      alignItems: { xs: 'flex-start', md: 'center' }, width: '100%', maxWidth: { xs: '100%', md: '1216px' },
      height: { xs: 'auto', md: '476px' }, mt: { xs: '32px', md: '48px' }, mb: { xs: '40px', md: '75px' },
      px: { xs: '16px', md: 0 }, mx: 'auto', boxSizing: 'border-box', overflowX: 'hidden',
      '@media (min-width: 1920px)': { ml: '352px', mr: '352px' },
      '@media (min-width: 1440px) and (max-width: 1919px)': { ml: '112px', mr: '112px' },
      '@media (min-width: 1280px) and (max-width: 1439px)': { ml: '32px', mr: '32px' }}}>
      
      <Box component="img" src={imageSrc} alt="Pizza Derretendo" sx={{ width: { xs: '100%', md: '592px' }, maxWidth: '100%', height: { xs: '255px', md: '476px' },borderRadius: 4, objectFit: 'cover', mx: 'auto'}}/>

      <Box sx={{mt: { xs: '32px', md: 0 }, width: { xs: '100%', md: '592px' }, maxWidth: { xs: '296px', md: 'none' },height: { md: '388px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',pb: { md: '88px' }, gap: { xs: 3, md: 0 }, mx: { xs: 'auto', md: 0 }}}>
          
          <Box>
            <Typography sx={{color: 'secondary.main',fontWeight: 600,fontSize: '14px',lineHeight: '20px',letterSpacing: 0,}}>
              Por que escolher Pizza SVG
            </Typography>
            <Typography component="h1"sx={{fontWeight: 400,fontSize: { xs: '24px', md: '32px' },lineHeight: { xs: '140%', md: '130%' },letterSpacing: 0,mb: 3,textAlign: 'left',whiteSpace: 'nowrap'}}>
              A melhor Pizza com o melhor<br/> atendimento da cidade
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[1, 2, 3].map((index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'left', sm: 'flex-start' }, textAlign: { xs: 'left', sm: 'left' }, gap: 1.5 }}>
                <Box component="img" src={`/icone${index}.svg`} alt={`Ícone ${index}`} sx={{ width: 40, height: 40, borderRadius: 2, boxShadow: 1, p: 1 }}/>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: { xs: '1rem', md: '1.125rem' }, mb: 0.5 }}>Lorem Ipsum Dolor</Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: { xs: '100%', md: '440px' } }}>
                    Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.
                  </Typography>
                
                </Box>
              </Box>
            ))}
          </Box>
      </Box>
    </Box>
  );
}