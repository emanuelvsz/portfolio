import { Flex, Space } from 'antd';
import { Header } from '../../components/header';
import { LandingContainer } from './components/landing-container';
// @ts-ignore
import styles from './styles.module.scss';

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Flex align='center' justify='space-between' className={styles.content}>
        <LandingContainer />
        <Space className={styles.sun}>
          <img src="src/assets/logo/only_sun.svg" alt="" className={styles.sunIcon}/>
          <img src="src/assets/logo/only_clouds.svg" alt="" className={styles.cloudIcon}/>
        </Space>
      </Flex>
    </div>
  );
}

export { HomePage };
