import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
// @ts-ignore
import styles from './styles.module.scss';

const SocialMediaSection = () => {
  return (
    <section className={styles.socialMediaSection}>
      <a href="https://instagram.com/emanuelvsz" target="_blank">
        <InstagramOutlined />
      </a>
      <a href="https://www.github.com/emanuelvsz" target="_blank">
        <GithubOutlined />
      </a>
      <a href="https://www.linkedin.com/in/emanuelvsz/" target="_blank">
        <LinkedinOutlined />
      </a>
    </section>
  );
};

export { SocialMediaSection };
