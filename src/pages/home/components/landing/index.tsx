import { FormattedMessage, useIntl } from 'react-intl';
// @ts-ignore
import styles from './styles.module.scss';

import { Flex } from 'antd';
import { Typewriter } from 'react-simple-typewriter';

export const toPixels = (n: number) => `${Math.floor(n)}px`;

const LandingContainer = () => {
  const intl = useIntl();

  // document.addEventListener('DOMContentLoaded', function () {
  //   const titles = document.querySelectorAll(
  //     '#title, #profission, #description, #socialMedia',
  //   );
  //   if (!titles.length) return;

  //   titles.forEach((title) => {
  //     const element = title as HTMLElement;
  //     const height = element.clientHeight;

  //     let currentOpacity = 0;
  //     let currentHeight = 0;
  //     let currentWidth = 0;

  //     const heightAnimation = setInterval(function () {
  //       currentHeight += 1;
  //       element.style.height = currentHeight + 'px';
  //       if (currentHeight >= height) {
  //         clearInterval(heightAnimation);
  //         element.style.height = 'auto';
  //       }
  //     }, 10);

  //     const opacityAnimation = setInterval(function () {
  //       currentOpacity += 0.01;
  //       element.style.opacity = currentOpacity.toString();
  //       if (currentOpacity >= 1) {
  //         clearInterval(opacityAnimation);
  //       }
  //     }, 10);

  //     const widthAnimation = setInterval(function () {
  //       currentWidth += 1;
  //       element.style.width = currentWidth + 'px';
  //       if (currentWidth >= element.clientWidth) {
  //         clearInterval(widthAnimation);
  //         element.style.width = 'auto';
  //       }
  //     }, 10);
  //   });
  // });

  return (
    <Flex
      className={styles.container}
      align="left"
      justify="space-between"
      vertical
      gap={80}
    >
      <Flex vertical>
        <h1 className={styles.title} id="title">
          EMANUEL VILELA
        </h1>
        <h1 className={styles.profission} id="profission">
          <FormattedMessage id="home.profession" />
        </h1>
        <p id="description">
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
      <Flex className={styles.socialMedia} gap={30} id="socialMedia">
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
