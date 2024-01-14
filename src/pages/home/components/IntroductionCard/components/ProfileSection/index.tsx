// @ts-ignore
import styles from './styles.module.scss';
// @ts-ignore
import profilePicture from '../../../../../../assets/photos/giteu.jfif';
// @ts-ignore
import strawHatPicture from '../../../../../../assets/photos/strawhat.png';

import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface ProfileSectionProps {
  className?: string;
}

const ProfileSection = ({ className }: ProfileSectionProps) => {
  return (
    <section className={`${styles.container} ${className}`}>
      <img src={profilePicture} alt="me" className={styles.profilePicture} />
      <div className={styles.imageContainer}>
        <img
          src={strawHatPicture}
          alt="strawhat"
          className={styles.strawHatPicture}
        />
      </div>
      <Button className={styles.iconContainer}>
        <ReloadOutlined className={styles.reloadIcon} />
      </Button>
    </section>
  );
};

export { ProfileSection };
