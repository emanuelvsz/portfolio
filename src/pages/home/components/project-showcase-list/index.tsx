/** @jsxImportSource @emotion/react */
import ProjectCard from '@components/project-card';
import { THEME_PADDINGS } from '@config/theme';
import { css } from '@emotion/react';
import { Flex, Typography, Row, Col } from 'antd';
import ProjectButton from '@components/projects-button';

const { Title } = Typography;

const ProjectShowcaseList = () => {
  const projects = [
    {
      id: 'rented-properties',
      title: 'Rented Properties Management',
      description:
        "System to manage properties that's rented, it payments, it expenses, dashboard of expenses, returns, money earned and a system that collects inventory of a property using AI image analysis.",
      image: 'https://i.imgur.com/8R0gWEv.jpeg',
      tags: ['Backend', 'Frontend'],
    },
    {
      id: 'pauli-chatbot',
      title: 'Real Estate AI Agent',
      description:
        "AI Chat Bot using LLM's and LLM Routing tools. Developed to help real estates investors to: find his best opportunities, evaluate a refurbish cost and earnings, know if a neighborhood is dangerous or not when buying a property.",
      image: 'https://i.imgur.com/MVHmWjF.jpeg',
      tags: ['Backend', 'Frontend', 'Mobile'],
    },
    {
      id: 'pauli-liquidity',
      title: 'Mobile Liquidity Platform',
      description:
        "Transforms your vehicle into instant liquidity — without stopping your mobility. We buy your car, insure and maintain it, and you decide whether to keep driving or let it generate value. Quick, transparent, and fully flexible. Move freely, keep control, and unlock your car's true potential.",
      image: 'https://i.imgur.com/0Buxd81.png',
      tags: ['Backend', 'Frontend'],
    },
  ];

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

  const handleNavigateToProjectDetails = () => {};

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
          {projects.map((project) => (
            <Col key={project.id} xs={24} md={12} xl={8}>
              <div css={styles.cardWrapper}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
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
