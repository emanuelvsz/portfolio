/** @jsxImportSource @emotion/react */
import ProjectCard from '@components/project-card';
import { THEME_PADDINGS } from '@config/theme';
import { css } from '@emotion/react';
import { Flex, Typography, Row, Col, Skeleton } from 'antd';
import ProjectButton from '@components/projects-button';
import { useNavigate } from 'react-router-dom';
import { useListProjects } from '@contexts/i18n/use-list-projects';

const { Title } = Typography;

const ProjectShowcaseList = () => {
  const navigate = useNavigate();

  const { data: projects = [], isLoading } = useListProjects({
    limit: 3,
    sort: 'desc',
  });

  const styles = {
    container: css`
      width: 100%;
      padding-inline: ${THEME_PADDINGS.PAGE_PADDING}px;
    `,
    headerContainer: css`
      width: 100%;
      margin-bottom: 40px;
    `,
    leftLine: css`
      height: 2px;
      width: 120px;
      background-color: #fff;
    `,
    rightLine: css`
      height: 2px;
      background-color: #fff;
      flex: 1;
    `,
    title: css`
      overflow: hidden;
      &.ant-typography {
        color: white;
        text-transform: uppercase;
        margin: 0 !important;
        font-size: 32px;
        padding: 0 24px;
        white-space: nowrap;
      }
    `,
    cardWrapper: css`
      height: 100%;
      width: 100%;

      & > div {
        max-width: none !important;
        width: 100% !important;
        height: 100%;
      }
    `,
    footer: css`
      margin-block: 48px;
    `,
  };

  const handleNavigateToProjectDetails = () => {
    navigate('/projects');
  };

  return (
    <Flex css={styles.container} vertical>
      <Flex align="center" gap={0} css={styles.headerContainer}>
        <div css={styles.leftLine} />
        <Title level={2} css={styles.title}>
          My Projects
        </Title>
        <div css={styles.rightLine} />
      </Flex>

      <Flex vertical>
        <Row gutter={[24, 24]}>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Col key={index} xs={24} md={12} xl={8}>
                  <Skeleton active paragraph={{ rows: 4 }} />
                </Col>
              ))
            : projects.map((project) => (
                <Col key={project.id} xs={24} md={12} xl={8}>
                  <div css={styles.cardWrapper}>
                    <ProjectCard
                      id={project.id.toString()}
                      title={project.title}
                      description={project.description}
                      image={project.images?.[0]}
                      tags={project.stack}
                    />
                  </div>
                </Col>
              ))}
        </Row>

        <Flex justify="center" align="center" css={styles.footer}>
          <ProjectButton
            label="See More Projects"
            onClick={handleNavigateToProjectDetails}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectShowcaseList;
