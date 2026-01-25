/** @jsxImportSource @emotion/react */
import { useState, useMemo } from 'react';
import { css } from '@emotion/react';
import {
  Input,
  Select,
  DatePicker,
  Row,
  Col,
  Typography,
  Flex,
  Button,
} from 'antd';
import {
  SearchOutlined,
  BuildOutlined,
  GlobalOutlined,
  CalendarOutlined,
  ClearOutlined,
} from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';

import Page from '@components/page';
import ProjectCard from '@components/project-card';

const { Title } = Typography;
const { RangePicker } = DatePicker;

type DateRange = [Dayjs | null, Dayjs | null] | null;

interface ProjectData {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  type: 'Backend' | 'Frontend' | 'Mobile' | 'Fullstack';
  createdAt: string;
  company: string;
}

export const MOCK_PROJECTS: ProjectData[] = [
  {
    id: 'rented-properties',
    title: 'Rented Properties Management',
    description:
      "System to manage properties that's rented, it payments, it expenses, dashboard of expenses, returns, money earned and a system that collects inventory of a property using AI image analysis.",
    image: 'https://i.imgur.com/8R0gWEv.jpeg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    type: 'Fullstack',
    createdAt: '2023-11-15',
    company: 'Pauli.AI',
  },
  {
    id: 'pauli-chatbot',
    title: 'Real Estate AI Agent',
    description:
      "AI Chat Bot using LLM's and LLM Routing tools. Developed to help real estates investors to: find his best opportunities, evaluate a refurbish cost and earnings.",
    image: 'https://i.imgur.com/MVHmWjF.jpeg',
    tags: [
      'Python',
      'Django',
      'Typescript',
      'React',
      'OpenAI',
      'FastAPI',
      'AWS Bedrock',
      'ChatBot',
    ],
    type: 'Fullstack',
    createdAt: '2024-01-10',
    company: 'Pauli.AI',
  },
  {
    id: 'pauli-liquidity',
    title: 'Mobile Liquidity Platform',
    description:
      'Transforms your vehicle into instant liquidity — without stopping your mobility. We buy your car, insure and maintain it, and you decide whether to keep driving.',
    image: 'https://i.imgur.com/0Buxd81.png',
    tags: ['React Native', 'TypeScript'],
    type: 'Mobile',
    createdAt: '2022-05-20',
    company: 'Pauli.AI',
  },
];

const styles = {
  headerContainer: css`
    width: 100%;
    margin-bottom: 40px;
    margin-top: 20px;
  `,
  leftLine: css`
    height: 1px;
    width: 100px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
  `,
  rightLine: css`
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.4), transparent);
    flex: 1;
  `,
  title: css`
    &.ant-typography {
      color: white;
      text-transform: uppercase;
      margin: 0 !important;
      font-size: 26px;
      letter-spacing: 3px;
      padding: 0 24px;
      font-weight: 400;
    }
  `,
  filterCard: css`
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 28px;
    margin-bottom: 48px;

    /* --- RESET ESTRUTURAL GLOBAL --- */
    .ant-picker,
    .ant-select-selector,
    .ant-input-affix-wrapper {
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .ant-input-affix-wrapper,
    .ant-select-selector,
    .ant-picker {
      background: rgba(255, 255, 255, 0.05) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      border-radius: 8px !important;
      height: 48px !important;
      width: 100% !important;
      box-shadow: none !important;
      display: flex !important;
      align-items: center !important;
      overflow: hidden !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    /* ALINHAMENTO DO INPUT TEXTO (PROJECT NAME) */
    .ant-input-affix-wrapper {
      display: flex !important;
      align-items: center !important;
      padding-left: 11px !important; /* Igualar padding do Select */
    }

    .ant-input {
      background: transparent !important;
      color: #fff !important;
      height: 100% !important;
      display: flex !important;
      align-items: center !important;
      padding: 0 !important;
      margin: 0 !important;
      line-height: normal !important; /* Crucial para centralizar */
    }

    /* ESTADOS DE HOVER/FOCUS */
    .ant-input-affix-wrapper:hover,
    .ant-input-affix-wrapper-focused,
    .ant-select-selector:hover,
    .ant-select-focused .ant-select-selector,
    .ant-picker:hover,
    .ant-picker-focused {
      border-color: rgba(255, 255, 255, 0.3) !important;
    }

    /* SELECT CONFIGS */
    .ant-select {
      width: 100%;
      height: 48px !important;
    }

    .ant-select-selector {
      padding: 0 11px !important;
    }

    .ant-select-selection-item {
      color: #fff !important;
      line-height: 46px !important;
      display: flex !important;
      align-items: center !important;
    }

    .ant-select-selection-search {
      height: 100% !important;
      display: flex !important;
      align-items: center !important;
    }

    /* --- DATE PICKER FIX (O CRÍTICO) --- */
    .ant-picker-input {
      height: 100% !important;
      display: flex !important;
      align-items: center !important;
      margin: 0 !important;
    }

    .ant-picker-input > input {
      color: #fff !important;
      font-size: 14px !important;
      height: 100% !important;
      display: flex !important;
      align-items: center !important;
      overflow: hidden !important; /* Garante que nada vaze */
    }

    /* Remove a barra azul ativa que às vezes causa overflow */
    .ant-picker-active-bar {
      display: none !important;
    }

    .ant-picker-range-separator {
      color: rgba(255, 255, 255, 0.4) !important;
      display: flex !important;
      align-items: center !important;
      height: 100% !important;
      padding: 0 8px !important; /* Ajuste para não quebrar linha */
    }

    /* PLACEHOLDERS */
    input::placeholder,
    .ant-select-selection-placeholder,
    .ant-picker-input > input::placeholder {
      color: rgba(255, 255, 255, 0.35) !important;
    }

    /* ÍCONES */
    .ant-input-prefix,
    .ant-select-arrow,
    .ant-picker-suffix {
      color: rgba(255, 255, 255, 0.4) !important;
      margin-right: 8px;
      display: flex !important;
      align-items: center !important;
      height: 100% !important;
    }

    /* REMOVE SPINNERS */
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button,
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0 !important;
    }

    /* MULTI-SELECT TAGS */
    .ant-select-selection-overflow {
      display: flex !important;
      align-items: center !important;
      height: 100% !important;
    }

    .ant-select-selection-overflow-item .ant-select-selection-item {
      background: rgba(255, 255, 255, 0.15) !important;
      border: none !important;
      color: #fff !important;
      border-radius: 4px;
      height: 24px !important;
      line-height: 24px !important;
      display: flex !important;
      align-items: center !important;
      margin: 0 !important;
    }
  `,
  label: css`
    color: rgba(255, 255, 255, 0.5);
    font-size: 11px;
    margin-bottom: 8px;
    display: block;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 500;
  `,
  clearButton: css`
    height: 48px;
    background: transparent !important;
    color: rgba(255, 255, 255, 0.5) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: #fff !important;
      border-color: rgba(255, 255, 255, 0.4) !important;
      background: rgba(255, 255, 255, 0.05) !important;
    }
  `,
  cardWrapper: css`
    width: 100%;
    & > div {
      width: 100% !important;
      max-width: none !important;
    }
  `,
};

const INITIAL_FILTERS = {
  name: '',
  stack: [] as string[],
  type: null as string | null,
  dateRange: null as DateRange,
  company: '',
};

type FilterValue = string | string[] | DateRange | null;

export function Projects() {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter((project) => {
      const matchesName = project.title
        .toLowerCase()
        .includes(filters.name.toLowerCase());
      const matchesStack =
        filters.stack.length === 0 ||
        filters.stack.some((s) => project.tags.includes(s));
      const matchesType =
        !filters.type ||
        project.type.toLowerCase() === filters.type.toLowerCase();
      const matchesCompany = project.company
        .toLowerCase()
        .includes(filters.company.toLowerCase());

      let matchesDate = true;
      const [start, end] = filters.dateRange || [null, null];
      if (start && end) {
        const projectDate = dayjs(project.createdAt);
        matchesDate =
          (projectDate.isAfter(start, 'day') ||
            projectDate.isSame(start, 'day')) &&
          (projectDate.isBefore(end, 'day') || projectDate.isSame(end, 'day'));
      }

      return (
        matchesName &&
        matchesStack &&
        matchesType &&
        matchesCompany &&
        matchesDate
      );
    });
  }, [filters]);

  const handleFilterChange = (key: string, value: FilterValue) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => setFilters(INITIAL_FILTERS);

  const allTags = Array.from(new Set(MOCK_PROJECTS.flatMap((p) => p.tags)));

  return (
    <Page>
      <Flex align="center" gap={0} css={styles.headerContainer}>
        <div css={styles.leftLine} />
        <Title level={2} css={styles.title}>
          Some Projects
        </Title>
        <div css={styles.rightLine} />
      </Flex>

      <div css={styles.filterCard}>
        <Row gutter={[16, 24]} align="bottom">
          <Col xs={24} md={8}>
            <span css={styles.label}>Search</span>
            <Input
              placeholder="Project name..."
              prefix={<SearchOutlined />}
              value={filters.name}
              onChange={(e) => handleFilterChange('name', e.target.value)}
            />
          </Col>

          <Col xs={24} md={8}>
            <span css={styles.label}>Stack</span>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="All technologies"
              value={filters.stack}
              suffixIcon={<BuildOutlined />}
              options={allTags.map((s) => ({ label: s, value: s }))}
              onChange={(val) => handleFilterChange('stack', val)}
              maxTagCount="responsive"
            />
          </Col>

          <Col xs={24} md={8}>
            <span css={styles.label}>Category</span>
            <Select
              style={{ width: '100%' }}
              placeholder="All types"
              value={filters.type}
              options={[
                { label: 'Backend', value: 'Backend' },
                { label: 'Frontend', value: 'Frontend' },
                { label: 'Mobile', value: 'Mobile' },
                { label: 'Fullstack', value: 'Fullstack' },
              ]}
              onChange={(val) => handleFilterChange('type', val)}
            />
          </Col>

          <Col xs={24} md={9}>
            <span css={styles.label}>Company</span>
            <Input
              placeholder="Filter by company..."
              prefix={<GlobalOutlined />}
              value={filters.company}
              onChange={(e) => handleFilterChange('company', e.target.value)}
            />
          </Col>

          <Col xs={18} md={12}>
            <span css={styles.label}>Date Range</span>
            <RangePicker
              style={{ width: '100%' }}
              value={filters.dateRange}
              suffixIcon={<CalendarOutlined />}
              onChange={(dates) =>
                handleFilterChange('dateRange', dates as DateRange)
              }
            />
          </Col>

          <Col xs={6} md={3}>
            <Button
              css={styles.clearButton}
              icon={<ClearOutlined />}
              onClick={clearFilters}
              block
            />
          </Col>
        </Row>
      </div>

      <Row gutter={[24, 24]}>
        {filteredProjects.map((project) => (
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
    </Page>
  );
}
