import './styles.css';
// @ts-ignore
import profilePicture from '../../../../../../assets/photos/giteu.jfif';
// @ts-ignore
import strawHatPicture from '../../../../../../assets/photos/strawhat.png';
import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const ProfileSection = () => {
  return (
    <section id="profileSection">
      <img src={profilePicture} alt="me" id="profilePicture" />
      <div id="imageContainer">
        <img src={strawHatPicture} alt="strawhat" id="strawHatPicture" />
      </div>
      <Button id="iconContainer">
        <ReloadOutlined id="reloadIcon" />
      </Button>
    </section>
  );
};

export { ProfileSection };
