/** @jsxImportSource @emotion/react */
import briefcaseIcon from '@assets/icons/fi-rs-briefcase.svg';
import { THEME_COLORS } from '@config/theme';
import { css } from '@emotion/react';
import { Button } from 'antd';

const styles = {
  button: css`
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

interface Props {
  label: string;
  onClick: () => void;
}

const ProjectButton = ({ label, onClick }: Props) => {
  return (
    <Button type="primary" css={styles.button} onClick={onClick}>
      {label}
      <img src={briefcaseIcon} height={20} />
    </Button>
  );
};

export default ProjectButton;
