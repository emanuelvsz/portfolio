import { ContactSection } from './components/ContactSection';

// @ts-ignore
import styles from './styles.module.scss';

interface ContactSwitcherProps {
  className?: string;
}

const ContactSwitcher = ({ className }: ContactSwitcherProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <ContactSection className={styles.contactSection} />
    </div>
  );
};

export { ContactSwitcher };
