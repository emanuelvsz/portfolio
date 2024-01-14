import { MotivationalText } from './components/MotivationalText';
import { IntroductionCard } from './components/IntroductionCard';
import { Header } from '../../components/Header';
// @ts-ignore
import styles from './styles.module.scss';

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <IntroductionCard />
      <MotivationalText />
    </div>
  );
}

export { HomePage };
