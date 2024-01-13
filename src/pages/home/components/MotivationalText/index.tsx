import { ArrowDownOutlined } from '@ant-design/icons';

// @ts-ignore
import styles from './styles.module.scss';
import { FormattedMessage } from 'react-intl';

const MotivationalText = () => {
  return (
    <div className={styles.container}>
      <FormattedMessage id="home.motivational-text" tagName="p" />
      <ArrowDownOutlined />
    </div>
  );
};

export { MotivationalText };
