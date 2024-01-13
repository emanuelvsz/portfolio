import { Header } from '../../components/Header';
import { IntroductionCard } from './components/IntroductionCard';
import { MotivationalText } from './components/MotivationalText';
import './styles.css';

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <IntroductionCard />
      <MotivationalText />
    </div>
  );
}

export { HomePage };
