/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ProjectTag = ({ label }: { label: string }) => {
  const styles = css`
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid #989898;
    border-radius: 20px;
    padding: 0 16px;
    font-weight: 500;
    color: white;
    white-space: nowrap;
  `;

  return <span css={styles}>{label}</span>;
};

export default ProjectTag;
