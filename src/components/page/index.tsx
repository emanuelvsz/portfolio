/** @jsxImportSource @emotion/react */
import { Header } from '@components/header';
import { THEME_PADDINGS } from '@config/theme';
import { css } from '@emotion/react';
import { Flex } from 'antd';

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      css={css`
        width: 100%;
        min-height: 100vh;
        background-color: #2f2b39;
      `}
      vertical
      align="center"
    >
      <Header />
      <Flex
        justify="space-between"
        css={css`
          width: 100vw;
          padding-inline: ${THEME_PADDINGS.PAGE_PADDING}px;
        `}
        vertical
        gap={16}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Page;
