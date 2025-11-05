/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { THEME_BORDER_RADIUS } from '@config/theme';
import { Stack } from '../stack-card-list';
import { Card, Flex, Typography } from 'antd';
import { CSSProperties } from 'react';

const styles = {
  card: css`
    height: 150px;
    width: 100%;
    border-radius: ${THEME_BORDER_RADIUS.GENERAL}px !important;

    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid #989898;
    overflow: hidden;
  `,
  title: css`
    color: #fff !important;
    margin: 0 !important;
  `,
  label: css`
    color: #fff;
    font-size: 0.9em;
  `,
  logo: css`
    border-radius: ${THEME_BORDER_RADIUS.GENERAL} !important;
  `,
};

const cardBodyLayout: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  padding: '16px',
  height: '100%',
};

interface Props {
  data: Stack;
}

const StackCard = ({ data }: Props) => {
  return (
    <Card css={styles.card} bodyStyle={cardBodyLayout}>
      <img src={data.logo} alt={data.label} height={90} css={styles.logo} />
      <Flex vertical justify="center">
        <Typography.Title level={5} css={styles.title}>
          {data.name}
        </Typography.Title>
        <Typography.Text css={styles.label}>{data.label}</Typography.Text>
      </Flex>
    </Card>
  );
};

export default StackCard;
