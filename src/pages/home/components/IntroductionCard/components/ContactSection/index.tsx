import { MailOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

// @ts-ignore
import styles from './styles.module.scss';

const ContactSection = () => {
  return (
    <a className={styles.contactSection}>
      <section>
        <MailOutlined />
      </section>
      <div>
        <p className={styles.title}>
          <FormattedMessage id="home.card.contact.title" />
        </p>
        <FormattedMessage id="home.card.contact.description" tagName="p" />
      </div>
    </a>
  );
};

export { ContactSection };
