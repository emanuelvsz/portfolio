/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Flex } from 'antd';
import { Header } from '../../components/header';
import LandingTransparentCard from './components/landing-transparent-card';

const pagePadding = '150px';

const styles = {
  container: css`
    width: 100%;
    min-height: 100vh;
    background-color: #2F2B39;
  `,
  content: css`
    width: 100%;
    padding-inline: ${pagePadding};
  `,
};

function Home() {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
    console.log(position);
  };

  return (
    <Flex css={styles.container} onScroll={handleScroll} vertical align='center'>
      <Header />
      <Flex justify="space-between" css={styles.content}>
        <LandingTransparentCard />
      </Flex>
    </Flex>
  );
}

export { Home };