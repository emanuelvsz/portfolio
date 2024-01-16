// @ts-ignore
import styles from './styles.module.scss';
import { DrawerMenu } from './DrawerMenu';
import { HeaderItems } from './HeaderItems';

import { useEffect, useState } from 'react';

const Header = () => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <h4>Emanuel Vilela</h4>
      {screenSize > 940 ? <HeaderItems /> : <DrawerMenu />}
    </div>
  );
};

export { Header };
