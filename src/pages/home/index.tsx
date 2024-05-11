import { Flex } from 'antd';
import { Header } from '../../components/header';
import { LandingContainer } from './components/landing-container';
// @ts-ignore
import styles from './styles.module.scss';

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Flex justify="space-between" className={styles.landing}>
        <LandingContainer />
        <div className={styles.sun}></div>
      </Flex>
      <img src="src/assets/line-component.svg" className={styles.lines} />
    </div>
  );
}

export { HomePage };
