import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import UserRolesSection from './components/UserRolesSection';
import FrontendSection from './components/FrontendSection';
import BackOfficeSection from './components/BackOfficeSection';
import DataModelSection from './components/DataModelSection';
import TechnicalSection from './components/TechnicalSection';
import MVPSection from './components/MVPSection';
import FutureSection from './components/FutureSection';
import MobileMenu from './components/MobileMenu';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 p-3 rounded-lg border border-gray-700 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          activeSection={activeSection}
          setActiveSection={(section: string) => {
            setActiveSection(section);
            setMobileMenuOpen(false);
          }}
        />
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block fixed left-0 top-0 h-full w-72 bg-gray-900 border-r border-gray-800 overflow-y-auto z-40">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Main Content */}
        <main className="lg:ml-72 flex-1 min-h-screen">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <HeroSection />
            <OverviewSection />
            <UserRolesSection />
            <FrontendSection />
            <BackOfficeSection />
            <DataModelSection />
            <TechnicalSection />
            <MVPSection />
            <FutureSection />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
