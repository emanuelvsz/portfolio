import { Header } from '../../components/Header';
import { IntroductionCard } from './components/IntroductionCard';
import './styles.css';

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <IntroductionCard />
    </div>
  );
}

export { HomePage };
