// @ts-ignore
import styles from './styles.module.scss';
import { MailOutlined } from '@ant-design/icons';


const ContactSection = () => {
  return (
    <a className={styles.contactSection}>
      <section>
        <MailOutlined />
      </section>
      <div>
        <p className={styles.title}>Write me an email</p>
        <p>This is the best way to contact me</p>
      </div>
    </a>
  );
};

export { ContactSection };
