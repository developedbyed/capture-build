import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollTop;
