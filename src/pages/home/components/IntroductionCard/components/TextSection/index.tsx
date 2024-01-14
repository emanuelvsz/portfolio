import { FormattedMessage } from 'react-intl';

// @ts-ignore
import styles from './styles.module.scss';

interface TextSectionProps {
  className?: string;
}

const TextSection = ({ className }: TextSectionProps) => {
  return (
    <section className={`${styles.container} ${className}`}>
      <p className={styles.title}>
        <FormattedMessage id="home.card.profession" />
      </p>
      <p className={styles.name}>Emanuel Vilela</p>
      <div className={styles.phraseSection}>
        <div></div>
        <FormattedMessage id="home.card.phrase" tagName="i" />
      </div>
    </section>
  );
};

export { TextSection };
