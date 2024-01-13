import { ContactSwitcher } from './components/ContactSwitcher';
import { ProfileSection } from './components/ProfileSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { TextSection } from './components/TextSection';
import './styles.css';

const IntroductionCard = () => {
  return (
    <div className="introductionCard">
      <ProfileSection />
      <TextSection />
      <SocialMediaSection />
      <ContactSwitcher />
    </div>
  );
};

export { IntroductionCard };
