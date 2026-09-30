export const sections = [
  { id: 'hero', label: 'Project Overview', icon: '🏠' },
  { id: 'overview', label: 'Vision & Goals', icon: '🎯' },
  { id: 'user-roles', label: 'User Roles', icon: '👥' },
  { id: 'frontend', label: 'Front-End Features', icon: '🖥️' },
  { id: 'backoffice', label: 'Back-Office Features', icon: '⚙️' },
  { id: 'data-model', label: 'Data Model', icon: '🗄️' },
  { id: 'technical', label: 'Technical Architecture', icon: '🏗️' },
  { id: 'mvp', label: 'MVP & Roadmap', icon: '🚀' },
  { id: 'future', label: 'Future Enhancements', icon: '✨' },
];

export interface SectionProps {
  id: string;
}
