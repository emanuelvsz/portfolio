import './styles.css';
// @ts-ignore
import profilePicture from '../../../../../../assets/photos/giteu.jfif';
// @ts-ignore
import strawHatPicture from '../../../../../../assets/photos/strawhat.png';

const ProfileSection = () => {
  return (
    <div id="profileSection">
      <img src={profilePicture} alt="me" id="profilePicture" />
      <img src={strawHatPicture} alt="strawhat" id="strawHatPicture" />
    </div>
  );
};

export { ProfileSection };
