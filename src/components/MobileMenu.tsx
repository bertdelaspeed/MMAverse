import { sections } from './shared';

interface MobileMenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function MobileMenu({ activeSection, setActiveSection }: MobileMenuProps) {
  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-sm">
      <div className="p-6 pt-16">
        <h2 className="text-lg font-bold text-white mb-4">Navigation</h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-3 ${
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
      </div>
    </div>
  );
}
