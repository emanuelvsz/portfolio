/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { THEME } from '@lib/theme';
import { Flex } from 'antd';

const styles = {
  ctaSection: css`
    @media (max-width: 768px) {
      align-items: flex-start;
    }
  `,
  ctaLabel: css`
    font-size: 14px;
    font-weight: 500;
    color: ${THEME.textWhite};
  `,
  ctaButton: css`
    background-color: ${THEME.textWhite};
    color: ${THEME.bgFooter};
    padding: 12px 28px;
    border-radius: 100px;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
    }
  `,
};

interface Props {
  showLabel?: boolean;
  label?: string;
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const AnimatedButton = ({ showLabel: showPlaceholderLabel, icon, text, label, onClick}: Props) => {
  return (
    <Flex css={styles.ctaSection} vertical align="flex-end" gap={16}>
      {showPlaceholderLabel && <span css={styles.ctaLabel}>{label}</span>}
      <a href="mailto:emanuelvilela.dev@gmail.com" css={styles.ctaButton} onClick={onClick}>
        {icon} {text}
      </a>
    </Flex>
  );
};

export default AnimatedButton;
