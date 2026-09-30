import { sections } from './shared';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-2xl">🥋</span>
          <span>MMA Dictionary</span>
        </h1>
        <p className="text-sm text-gray-400 mt-1">Application Specification v1.0</p>
      </div>
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 ${
              activeSection === section.id
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            <span>{section.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <p className="text-xs text-gray-400">
          <span className="text-indigo-400 font-semibold">Status:</span> Specification Phase
        </p>
        <p className="text-xs text-gray-500 mt-1">Last updated: 2026</p>
      </div>
    </div>
  );
}
