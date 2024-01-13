// @ts-ignore
import styles from './styles.module.scss';

const TextSection = () => {
  return (
    <section className={styles.textSection}>
      <p className={styles.title}>Software Engineer</p>
      <p className={styles.name}>Emanuel Vilela</p>
      <div className={styles.phraseSection}>
        <div></div>
        <i>
          Whats up, homies! Do you need a software, whatever it may be? Contact
          me and you will have what you need
        </i>
      </div>
    </section>
  );
};

export { TextSection };
