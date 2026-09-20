export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web & App' | 'Data Analytics' | 'AI & Automation' | 'Growth';
  description: string;
  metrics: string[];
  tags: string[];
  year: string;
  role: string;
  status: 'Shipped' | 'In Progress' | 'Active';
  featured?: boolean;
}

export interface Pillar {
  id: string;
  title: string;
  badge: string;
  equation: string;
  description: string;
  stats: { label: string; value: string }[];
  highlight: string;
}
