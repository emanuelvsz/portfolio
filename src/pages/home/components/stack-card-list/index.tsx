/** @jsxImportSource @emotion/react */
import { THEME_COLORS } from '@config/theme';
import { css } from '@emotion/react';
import { Flex } from 'antd';
import { stackList } from './data';
import StackCard from '../stack-card';

export interface Stack {
  name: string;
  label: string;
  logo: string;
}

const styles = {
  mainLanguagesTitle: css`
    font-size: 22px;
    font-weight: 600;
    color: ${THEME_COLORS.WHITE_COLOR};
    margin-bottom: 16px;
  `,
  cardList: css`
    width: 100%;
  `,
};

const StackCardList = () => {
  return (
    <Flex align="center" justify="center" vertical>
      <p css={styles.mainLanguagesTitle}>Main programming languages</p>
      <Flex css={styles.cardList} gap={16}>
        {stackList.map((item, index) => (
          <StackCard key={index} data={item} />
        ))}
      </Flex>
    </Flex>
  );
};

export default StackCardList;
