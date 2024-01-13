import { ArrowDownOutlined } from '@ant-design/icons';

// @ts-ignore
import styles from './styles.module.scss';

const MotivationalText = () => {
  return (
    <div className={styles.container}>
      <p>You are so close to finding what you are looking for</p>
      <ArrowDownOutlined />
    </div>
  );
};

export { MotivationalText };
