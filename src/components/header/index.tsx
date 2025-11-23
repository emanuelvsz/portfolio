/** @jsxImportSource @emotion/react */
import { THEME_BORDER_RADIUS, THEME_COLORS, THEME_PADDINGS } from '@config/theme';
import { css } from '@emotion/react';
import { Flex } from 'antd';
import { FormattedMessage } from 'react-intl';

const styles = {
  header: css`
    position: sticky;
    top: 0;
    height: 70px;
    width: calc(100vw - ${THEME_PADDINGS.PAGE_PADDING * 2}px) !important;
    padding-inline: 32px;
    background-color: ${THEME_COLORS.WHITE_COLOR};
    border-radius: ${THEME_BORDER_RADIUS.GENERAL}px !important;
    
    overflow: hidden; 

    @media (max-width: 848px) {
      padding-inline: 50px;
    }
  `,
  title: css`
    font-weight: bold;
    font-size: 22px;
    color: ${THEME_COLORS.PRIMARY_COLOR};
  `,
  items: css`
    ul {
      text-decoration: none;
      list-style: none;
      display: flex;
      gap: 32px;

      li {
        cursor: pointer;
        color: ${THEME_COLORS.PRIMARY_COLOR};
        font-size: 18px;
        font-weight: 500;
      }
    }
  `,
  container: css`
    padding-block: 25px;
    padding-inline: ${THEME_PADDINGS.PAGE_PADDING}px;
    z-index: 9999;
  `
};

const Header = () => {
  return (
    <Flex css={styles.container}>
      <Flex css={styles.header} align='center' justify='space-between'>
      <h4 css={styles.title}>Emanuel Vilela</h4>
      <Flex css={styles.items} justify="center" align="center" gap={40}>
        <ul>
          <FormattedMessage id="header.option.home" tagName="li" />
          <FormattedMessage id="header.option.participations" tagName="li" />
          <FormattedMessage id="header.option.formation" tagName="li" />
        </ul>
        {/* <LanguageDropdown /> */}
      </Flex>
    </Flex>
    </Flex>
  );
};

export { Header };
