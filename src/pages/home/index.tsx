import { Flex } from 'antd';
import { Header } from '../../components/header';
import { LandingContainer } from './components/landing-container';
// @ts-ignore
import styles from './styles.module.scss';
import { SimpleParallax } from './components/landing-container/simple-parallax';

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <SimpleParallax>
        <Flex justify="space-between" className={styles.landing}>
          <LandingContainer />
          <div className={styles.sun}></div>
        </Flex>
      </SimpleParallax>
      <SimpleParallax>
        <Flex className={styles.about}>
          <p>aaa</p>
        </Flex>
      </SimpleParallax>
    </div>
  );
}

export { HomePage };
