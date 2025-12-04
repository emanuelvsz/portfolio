/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Flex, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { THEME_COLORS } from '@config/theme';

const { Title, Paragraph } = Typography;

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

interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ image, title, description, tags, id }: Props) => {
  const styles = {
    card: css`
      position: relative;
      width: 100%;
      max-width: 400px;
      height: 330px !important;
      border-radius: 16px;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: -20px;
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        filter: blur(3px);
        z-index: 0;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.6) 100%
        );
        z-index: 1;
      }
    `,
    contentContainer: css`
      position: relative;
      z-index: 2;
      height: 100%;
      padding: 24px;
    `,
    textSection: css`
      flex: 1;
    `,
    title: css`
      &.ant-typography {
        color: white;
        margin-bottom: 8px;
      }
    `,
    description: css`
      &.ant-typography {
        color: rgba(255, 255, 255, 0.8);
      }
    `,
    footer: css`
      margin-top: auto;
      width: 100%;
    `,
    seeDetailsButton: css`
      position: absolute;
      bottom: 24px;
      right: 24px;
      border-radius: 999px;
      width: 40px;
      height: 40px;

      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid #989898;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0;
      cursor: pointer;
      z-index: 10;

      white-space: nowrap;
      overflow: hidden;
      transition:
        width 0.3s ease,
        transform 0.3s ease,
        padding 0.3s ease;

      &:hover {
        width: 125px;
        transform: scale(1.05);
        gap: 8px;

        justify-content: flex-start;
        padding: 0 10px;
      }
    `,
    downloadText: css`
      color: ${THEME_COLORS.WHITE_COLOR};
      font-weight: 500;
      font-size: 14px;

      opacity: 0;
      max-width: 0;

      transition:
        opacity 0.2s ease 0.1s,
        max-width 0.3s ease;

      .details-button-wrapper:hover & {
        opacity: 1;
        max-width: 100px;
      }
    `,
    icon: css`
      color: ${THEME_COLORS.WHITE_COLOR};
    `,
  };

  const handleSeeProjectDetails = () => {};

  return (
    <div id={id} css={styles.card}>
      <Flex vertical justify="space-between" css={styles.contentContainer}>
        <div css={styles.textSection}>
          <Title level={4} css={styles.title}>
            {title}
          </Title>
          <Paragraph ellipsis={{ rows: 6 }} css={styles.description}>
            {description}
          </Paragraph>
        </div>

        <Flex align="center" justify="space-between" css={styles.footer}>
          <Flex gap="8px" wrap="wrap">
            {tags.map((tag) => (
              <ProjectTag key={tag} label={tag} />
            ))}
          </Flex>

          <div
            css={styles.seeDetailsButton}
            onClick={handleSeeProjectDetails}
            className="details-button-wrapper"
          >
            <ArrowRightOutlined css={styles.icon} />
            <span css={styles.downloadText}>See Details</span>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default ProjectCard;
