/** @jsxImportSource @emotion/react */

import { useState, useMemo } from 'react'
import { css } from '@emotion/react'
import {
  Input,
  Typography,
  Flex,
  Button,
  Row,
  Col,
  Tag,
  Segmented,
} from 'antd'
import {
  SearchOutlined,
  ClearOutlined,
} from '@ant-design/icons'

import Page from '@components/page'
import ProjectCard from '@components/project-card'
import { MOCK_PROJECTS } from '../../data/projects'
import { THEME } from '@lib/theme'

const { Title } = Typography

const styles = {
  headerContainer: css`
    width: 100%;
    margin: 20px 0 40px;
  `,

  leftLine: css`
    height: 1px;
    width: 100px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4)
    );
  `,

  rightLine: css`
    height: 1px;
    flex: 1;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.4),
      transparent
    );
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
      overflow: hidden !important;
    }
  `,

  filterBar: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 48px;
  `,

  search: css`
    background: ${THEME.textWhite} !important;
    height: 40px;
    box-shadow: none !important;
    color: #000 !important;


    .ant-input-affix-wrapper {
      box-shadow: none !important;
      height: 52px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 0 16px;
      background: ${THEME.textWhite} !important;
    }

    svg {
      color: #000 !important;
    }

    input {
      color: #000;
      background: ${THEME.textWhite} !important;
      box-shadow: none;
    }

    input::placeholder {
      color: #000;
    }

    .ant-input-prefix {
      color: rgba(255, 255, 255, 0.4);
      background: ${THEME.textWhite} !important;
    }
  `,

  secondaryRow: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  `,

  tagScroll: css`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 4px;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  tag: css`
    padding: 6px 16px;
    border-radius: 20px;
    cursor: pointer;
    white-space: nowrap;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: white;
    }
  `,

  tagActive: css`
    background: rgba(255, 255, 255, 0.18) !important;
    color: white !important;
    border-color: rgba(255, 255, 255, 0.25) !important;
  `,

  segmented: css`
    .ant-segmented {
      background: rgba(255, 255, 255, 0.04);
      border-radius: 12px;
      padding: 4px;
    }

    .ant-segmented-item {
      color: rgba(255, 255, 255, 0.6);
      border-radius: 20px;
    }

    .ant-segmented-item-selected {
      background: rgba(255, 255, 255, 0.18);
      color: white;
    }
  `,

  clearButton: css`
    height: 36px;
    border-radius: 8px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }
  `,
}

// =====================
// COMPONENT
// =====================

const INITIAL_FILTERS = {
  name: '',
  stack: [] as string[],
  type: 'All',
}

export function Projects() {
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const allTags = Array.from(
    new Set(MOCK_PROJECTS.flatMap((p) => p.tags))
  ).sort()

  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter((project) => {
      const matchesName = project.title
        .toLowerCase()
        .includes(filters.name.toLowerCase())

      const matchesStack =
        filters.stack.length === 0 ||
        filters.stack.every((tag) => project.tags.includes(tag))

      const matchesType =
        filters.type === 'All' ||
        project.type === filters.type

      return matchesName && matchesStack && matchesType
    })
  }, [filters])

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      stack: prev.stack.includes(tag)
        ? prev.stack.filter((t) => t !== tag)
        : [...prev.stack, tag],
    }))
  }

  const clearFilters = () => setFilters(INITIAL_FILTERS)

  return (
    <Page>
      <Flex align="center" css={styles.headerContainer}>
        <div css={styles.leftLine} />
        <Title level={2} css={styles.title}>
          Some Projects
        </Title>
        <div css={styles.rightLine} />
      </Flex>
      <div css={styles.filterBar}>
        <Input
          css={styles.search}
          placeholder="Search projects..."
          prefix={<SearchOutlined />}
          value={filters.name}
          onChange={(e) =>
            setFilters({ ...filters, name: e.target.value })
          }
        />
        <div css={styles.secondaryRow}>
          <Segmented
            css={styles.segmented}
            options={[
              'All',
              'Backend',
              'Frontend',
              'Mobile',
              'Fullstack',
            ]}
            value={filters.type}
            onChange={(val) =>
              setFilters({ ...filters, type: val as string })
            }
          />
          <Button
            css={styles.clearButton}
            icon={<ClearOutlined />}
            onClick={clearFilters}
          >
            Clear
          </Button>
        </div>
        <div css={styles.tagScroll}>
          {allTags.map((tag) => (
            <Tag
              key={tag}
              css={[
                styles.tag,
                filters.stack.includes(tag) && styles.tagActive,
              ]}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <Row gutter={[24, 24]}>
        {filteredProjects.map((project) => (
          <Col key={project.id} xs={24} md={12} xl={8}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Page>
  )
}
