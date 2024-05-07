import { FormattedMessage, useIntl } from 'react-intl';
// @ts-ignore
import styles from './styles.module.scss';

import { Flex } from 'antd';
import { Typewriter } from 'react-simple-typewriter';

export const toPixels = (n: number) => `${Math.floor(n)}px`;

const LandingContainer = () => {
  const intl = useIntl();

  return (
    <Flex
      className={styles.container}
      align="left"
      justify="space-between"
      vertical
      gap={80}
    >
      <Flex vertical>
        <h1 className={styles.title}>EMANUEL VILELA</h1>
        <h1 className={styles.profission}>
          <FormattedMessage id="home.profession" />
        </h1>
        <p>
          <Typewriter
            words={[intl.messages['home.description'].toString()]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </p>
      </Flex>
      <Flex className={styles.socialMedia} gap={30}>
        <img
          src="src/assets/icons/linkedin.png"
          alt="LinkedIn"
          onClick={() => {
            window.open('https://www.linkedin.com/in/emanuelvsz/', '_blank');
          }}
        />
        <img
          src="src/assets/icons/github.png"
          alt="GitHub"
          onClick={() => {
            window.open('https://www.github.com/emanuelvsz', '_blank');
          }}
        />
        <img
          src="src/assets/icons/instagram.png"
          alt="Instagram"
          onClick={() => {
            window.open('https://www.instagram.com/emanuelvsz', '_blank');
          }}
        />
      </Flex>
    </Flex>
  );
};

export { LandingContainer };
