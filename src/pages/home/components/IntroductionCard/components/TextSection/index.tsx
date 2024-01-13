import { FormattedMessage } from 'react-intl';

// @ts-ignore
import styles from './styles.module.scss';

const TextSection = () => {
  return (
    <section className={styles.textSection}>
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
