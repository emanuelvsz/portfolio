export interface ProjectData {
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
