import { ContactSection } from '../ContactSection';

// @ts-ignore
import styles from './styles.module.scss';

const ContactSwitcher = () => {
  return (
    <div className={styles.container}>
      <ContactSection className={styles.contactSection} />
    </div>
  );
};

export { ContactSwitcher };
