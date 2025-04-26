import { useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const perguntasFrequentes = [
  {
    question: 'Pizza é boa?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.'
  },
  {
    question: 'Vende pizza?',
    answer: 'Sim, vendemos pizza todos os dias com os melhores ingredientes.'
  },
  {
    question: 'Tem pizza de calabresa?',
    answer: 'Claro! Temos calabresa artesanal com cebola roxa e azeitona.'
  },
  {
    question: 'Tem delivery?',
    answer: 'Sim, entregamos no conforto da sua casa com rapidez.'
  },
  {
    question: 'Entrega de bike?',
    answer: 'Sim, nossas entregas ecológicas são feitas de bike na região central.'
  },
];

const Image = styled('img')({ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 });
const QuestionBox = styled(Box)({ borderBottom: '1px solid #eee', padding: '16px 0', cursor: 'pointer' });

export function Faq() {
  const [indiceAberto, setOpenIndex] = useState<number | null>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const alternarResposta = (index: number) => setOpenIndex(prev => prev === index ? null : index);

  return (
    <Box id="faq" component="section"
      sx={{
        scrollMarginTop: '140px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: { xs: 6, md: '36px' },
        px: { xs: '16px', md: 0 },
        mt: { xs: 0, md: '75px' },
        width: '100%',
        maxWidth: '1216px',
        height: { md: '694px' },
        mx: 'auto',
        boxSizing: 'border-box'
      }}>
     
      <Box sx={{
        width: { xs: '100%', md: '588px' },
        height: { xs: 'auto', md: '547px' },
        mt: { xs: 2, md: '58px' },
        mb: { xs: 2, md: '89px' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        order: { xs: 0, md: 1 }
      }}><Image src={isMobile ? '/Multipizza_mobile.svg' : '/Multipizza.svg'} alt="Pizza Image" /></Box>

      <Box sx={{
        width: { xs: '100%', md: '591px' },
        height: { md: '614px' },
        display: 'flex',
        flexDirection: 'column',
        gap: { md: '32px' },
        pt: { md: 0 },
        pb: { md: '80px' },
        order: { xs: 1, md: 0 }}}>
          
        <Box>
       
        <Typography sx={{color: 'secondary.main',fontWeight: 600,fontSize: '14px',lineHeight: '20px',letterSpacing: 0,}}>
          FAQ
        </Typography>

          <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: '24px', md: '32px' },
                lineHeight: { xs: '140%', md: '130%' },
                letterSpacing: 0,
                whiteSpace: 'pre-line',
                mb: 3}}>
              {isMobile
                ? 'Tire todas as suas dúvidas sobre nosso processo de\nprodução!'
                : 'Tire todas as suas dúvidas sobre nosso\nprocesso de produção!'}
           </Typography>

          <Typography color="text.secondary" mb={4}>
            Lorem ipsum dolor sit amet consectetur.{' '}
            <Box component="span" sx={{ color: 'secondary.main', display: 'inline' }}>
              Etiam pellentesque
            </Box>{' '}
            gravida eu egestas sed quis donec ipsum eu. In viverra velit.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 2 }}>
          {perguntasFrequentes.map((item, index) => (
            <QuestionBox key={index} onClick={() => alternarResposta(index)}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography fontWeight={600}>{item.question}</Typography>
                <img src={indiceAberto === index ? '/minus-circle.svg' : '/plus-circle.svg'} width={24} height={24} />
              </Box>
              {indiceAberto === index && <Typography mt={1} color="text.secondary">{item.answer}</Typography>}
            </QuestionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}