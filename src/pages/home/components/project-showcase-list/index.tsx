/** @jsxImportSource @emotion/react */
import ProjectCard from '@components/project-card';
import { THEME_PADDINGS } from '@config/theme';
import { css } from '@emotion/react';
import { Flex, Typography, Row, Col } from 'antd';

const { Title } = Typography;

const ProjectShowcaseList = () => {
  const projects = [
    {
      id: 'rented-properties',
      title: 'Rented Properties Management',
      description:
        "System to manage properties that's rented, it payments, it expenses, dashboard of expenses, returns, money earned and a system that collects inventory of a property using AI image analysis.",
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      tags: ['Backend', 'Frontend'],
    },
    {
      id: 'pauli-chatbot',
      title: 'Pauli.AI AI Chat Bot',
      description:
        "AI Chat Bot using LLM's and LLM Routing tools. Developed to help real estates investors to: find his best opportunities, evaluate a refurbish cost and earnings, know if a neighborhood is dangerous or not when buying a property.",
      image:
        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop',
      tags: ['Backend', 'Frontend', 'Mobile'],
    },
    {
      id: 'pauli-liquidity',
      title: 'Pauli.AI Mobile Liquidity',
      description:
        "Transforms your vehicle into instant liquidity — without stopping your mobility. We buy your car, insure and maintain it, and you decide whether to keep driving or let it generate value. Quick, transparent, and fully flexible. Move freely, keep control, and unlock your car's true potential.",
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop',
      tags: ['Backend', 'Frontend'],
    },
  ];

  const styles = {
    container: css`
      width: 100%;
      display: flex;
      flex-direction: column;
      /* align-items: center; REMOVIDO: Isso impedia que a Row esticasse */
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
    /* A Row do AntD já tenta ocupar 100%, mas garantimos aqui */
    row: css`
      width: 100%;
      margin-left: 0 !important;
      margin-right: 0 !important;
    `,
    cardWrapper: css`
      height: 100%;
      width: 100%;
      /* Força o card interno a ocupar 100% do espaço da Coluna */
      & > div {
        max-width: none !important;
        width: 100% !important;
        height: 100%;
      }
    `,
    footer: css`
      margin-top: 20px;
      align-self: center; /* Centraliza apenas o footer se necessário */
    `,
  };

  return (
    <div css={styles.container}>
      <Flex align="center" gap={0} css={styles.headerContainer}>
        <div css={styles.leftLine} />
        <Title level={2} css={styles.title}>
          My Projects
        </Title>
        <div css={styles.rightLine} />
      </Flex>

      <Row gutter={[24, 24]} css={styles.row}>
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

      <Flex css={styles.footer}>asdasd</Flex>
    </div>
  );
};

export default ProjectShowcaseList;
