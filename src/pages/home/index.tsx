import { Flex } from 'antd';
import { Header } from '../../components/header';
import { LandingContainer } from './components/landing-container';
// @ts-ignore
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import Plx from 'react-plx';

function HomePage() {
  const starPath = 'src/assets/star.svg';
  const START_COUNT = 50;

  const StarBackground = () => {
    const [pageHeight, setPageHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setPageHeight(window.innerHeight);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const stars: JSX.Element[] = [];
    const containerStyle: React.CSSProperties = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: `${pageHeight}px`, // Ajusta a altura do container para a altura da página
      overflow: 'hidden',
    };
    for (let i = 0; i < START_COUNT; i++) {
      const size = Math.random() * 0.2 + 0.4;
      const style: React.CSSProperties = {
        position: 'absolute',
        zIndex: 0,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * pageHeight}px`, // Ajusta a posição vertical para cobrir toda a altura da página
        width: `${size}rem`,
        height: `${size}rem`,
      };
      stars.push(<img key={i} src={starPath} style={style} alt="star" />);
    }
    return <div style={containerStyle}>{stars}</div>;
  };

  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <StarBackground />
      <Header />
      <Flex justify="space-between" className={styles.landing}>
        <Plx parallaxData={parallaxData}>
          <LandingContainer />
        </Plx>
        <Plx parallaxData={parallaxData} className={styles.moon}>
        </Plx>
      </Flex>
      <Flex className={styles.about}>div</Flex>
    </div>
  );
}

export { HomePage };

{
  /* <Flex className={styles.linesContainer} vertical>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={styles.coloredLines}
        >
          <path
            fill="#2E3047"
            fill-opacity="1"
            d="M0,160L360,224L720,64L1080,128L1440,128L1440,320L1080,320L720,320L360,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={styles.whiteLines}
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L360,224L720,64L1080,128L1440,128L1440,320L1080,320L720,320L360,320L0,320Z"
          ></path>
        </svg>
      </Flex> */
}
