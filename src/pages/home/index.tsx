import { Flex } from 'antd';
import { Header } from '../../components/header';
import { LandingContainer } from './components/landing';
// @ts-ignore
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import Plx from 'react-plx';

function Home() {
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
      height: `${pageHeight}px`,
      overflow: 'hidden',
    };
    for (let i = 0; i < START_COUNT; i++) {
      const size = Math.random() * 0.2 + 0.4;
      const style: React.CSSProperties = {
        position: 'absolute',
        zIndex: 0,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * pageHeight}px`,
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

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e: any) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100,
    );
    setScrollPosition(position);
    console.log(scrollPosition);
  };

  return (
    <div className={styles.container} onScroll={handleScroll}>
      <StarBackground />
      <Header />
      <Flex justify="space-between" className={styles.landing}>
        <LandingContainer />
        <Plx parallaxData={parallaxData} className={styles.moon}></Plx>
      </Flex>
    </div>
  );
}

export { Home };
