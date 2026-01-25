/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { Flex, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { THEME_COLORS } from '@config/theme';
import ProjectTag from '@components/project-tag';

const { Title, Paragraph } = Typography;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

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
        inset: 0;
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        filter: blur(1px);
        z-index: 0;
        transform: scale(1.1);
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0.8) 100%
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
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    `,
    carouselContainer: css`
      overflow: hidden;
      width: 80%;
      position: relative;
      mask-image: linear-gradient(
        to right,
        transparent,
        black 10%,
        black 90%,
        transparent
      );
    `,
    carouselTrack: css`
      width: max-content;
      animation: ${scroll} 20s linear infinite;

      &:hover {
        animation-play-state: paused;
      }
    `,
    seeDetailsButton: css`
      position: absolute;
      bottom: 20px;
      right: 20px;
      border-radius: 999px;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid #989898;
      padding: 0;
      cursor: pointer;
      z-index: 10;
      white-space: nowrap;
      overflow: hidden;
      transition:
        width 0.3s ease,
        padding 0.3s ease;

      &:hover {
        width: 125px;
        padding: 0 12px;
        justify-content: flex-start;
      }
    `,
    buttonText: css`
      color: ${THEME_COLORS.WHITE_COLOR};
      font-weight: 500;
      font-size: 14px;
      opacity: 0;
      max-width: 0;
      margin-left: 0;
      transition:
        opacity 0.2s ease,
        max-width 0.3s ease,
        margin 0.3s ease;

      .details-button-wrapper:hover & {
        opacity: 1;
        max-width: 100px;
        margin-left: 8px;
      }
    `,
    icon: css`
      color: ${THEME_COLORS.WHITE_COLOR};
      font-size: 16px;
    `,
  };

  const handleNavigateToProjectDetails = () => {
    console.log(`Navigating to project ${id}`);
  };

  return (
    <div id={id} css={styles.card}>
      <Flex vertical justify="space-between" css={styles.contentContainer}>
        <div css={styles.textSection}>
          <Title level={4} css={styles.title}>
            {title}
          </Title>
          <Paragraph ellipsis={{ rows: 4 }} css={styles.description}>
            {description}
          </Paragraph>
        </div>

        <div css={styles.footer}>
          <div css={styles.carouselContainer}>
            <Flex css={styles.carouselTrack} gap={8}>
              {[...tags, ...tags].map((tag, index) => (
                <ProjectTag key={`${tag}-${index}`} label={tag} />
              ))}
            </Flex>
          </div>

          <Flex
            css={styles.seeDetailsButton}
            onClick={handleNavigateToProjectDetails}
            className="details-button-wrapper"
            justify="center"
            align="center"
          >
            <ArrowRightOutlined css={styles.icon} />
            <span css={styles.buttonText}>See Details</span>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default ProjectCard;
