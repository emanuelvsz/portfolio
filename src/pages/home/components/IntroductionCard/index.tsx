import { SocialMediaSection } from './components/SocialMediaSection';
import { ContactSwitcher } from './components/ContactSwitcher';
import { ProfileSection } from './components/ProfileSection';
import { TextSection } from './components/TextSection';
// @ts-ignore
import styles from './styles.module.scss';

const IntroductionCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.professionalContainer}>
          <ProfileSection className={styles.profileSection} />
          <TextSection className={styles.textSection} />
        </div>
        <SocialMediaSection className={styles.socialMediaSection} />
      </div>
      <ContactSwitcher className={styles.contactSwitcher} />
    </div>
  );
};

export { IntroductionCard };
