import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const Banner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const bannerSrc = isMobile ? '/BANNER MOBILE.svg' : '/BANNER DESKTOP.svg';

  return (
    <div style={{ width: '100%', overflow: 'hidden', margin: 0, padding: 0 }}>
      <img src={bannerSrc} alt="Banner" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }} />
    </div>
  );
};

export default Banner;