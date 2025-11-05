/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Flex } from 'antd';
import { Header } from '../../components/header';
import LandingTransparentCard from './components/landing-transparent-card';
import { THEME_BORDER_RADIUS, THEME_COLORS } from '@config/theme';

import briefcaseIcon from '@assets/icons/fi-rs-briefcase.svg';
import StackCardList from './components/stack-card-list';
import ScrollToSeeContainer from './components/scroll-to-see-container';

const pagePadding = '150px';

const styles = {
  container: css`
    width: 100%;
    min-height: 100vh;
    background-color: #2f2b39;
  `,
  content: css`
    width: 100%;
    padding-inline: ${pagePadding};
  `,
  mainLanguagesTitle: css`
    font-size: 22px;
    font-weight: 600;
    color: ${THEME_COLORS.WHITE_COLOR};
    margin-bottom: 16px;
  `,
  cardList: css`
    width: 100%;
  `,
  card: css`
    height: 150px;
    width: 100%;
    border-radius: ${THEME_BORDER_RADIUS.GENERAL}px !important;

    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid #989898;
  `,
  projectsTitle: css`
    color: ${THEME_COLORS.GRAY_COLOR};
    text-align: center;
    font-size: 18px;
  `,
  projectsButton: css`
    box-shadow: none;
    background-color: ${THEME_COLORS.WHITE_COLOR} !important;
    color: ${THEME_COLORS.PRIMARY_COLOR} !important;
    overflow: hidden;
    width: fit-content
    font-size: 22px;
    font-weight: 500;
    height: 40px !important;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  `,
};

function Home() {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100,
    );
    console.log(position);
  };

  return (
    <Flex
      css={styles.container}
      onScroll={handleScroll}
      vertical
      align="center"
    >
      <Header />
      <Flex justify="space-between" css={styles.content} vertical gap={16}>
        <LandingTransparentCard />
        <StackCardList />

        <Flex vertical justify="center" align="center" gap={16}>
          <p css={styles.projectsTitle}>
            You can filter projects based on the <br />
            technologies I've worked with.
          </p>
          <Button type="primary" css={styles.projectsButton}>
            See projects
            <img src={briefcaseIcon} height={20} />
          </Button>
        </Flex>
      </Flex>
      <ScrollToSeeContainer />
    </Flex>
  );
}

export { Home };
