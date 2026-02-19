import { useQuery } from '@tanstack/react-query'

export interface Project {
  id: number
  title: string
  description: string
  role: string
  stack: string[]
  architecture: string
  database: string
  features: string[]
  github: string | null
  demo: string | null
  status: string
  images: string[]
}

interface UseListProjectsParams {
  limit?: number
  sort?: 'asc' | 'desc'
}

const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(
    'https://my-json-server.typicode.com/emanuelvsz/portfolio/projects'
  )

  if (!response.ok) {
    throw new Error('Failed to fetch projects')
  }

  return response.json()
}

export const useListProjects = (
  params?: UseListProjectsParams
) => {
  return useQuery({
    queryKey: ['projects', params],
    queryFn: fetchProjects,
    select: (data: Project[]) => {
      let projects = [...data]

      if (params?.sort) {
        projects.sort((a, b) =>
          params.sort === 'desc'
            ? b.id - a.id
            : a.id - b.id
        )
      }

      if (params?.limit) {
        projects = projects.slice(0, params.limit)
      }

      return projects
    },
  })
}
