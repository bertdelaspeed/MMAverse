export default function FutureSection() {
  return (
    <section id="future" className="py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-2xl">✨</span> Future Enhancements
      </h2>
      <p className="text-gray-400 mb-8">Additional features to make the platform truly comprehensive and competitive</p>

      {/* Community Features */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-pink-400">💬</span> Community & Social
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Comments & Discussions', desc: 'Logged-in users can leave comments on techniques. Ask questions, share experiences, discuss variations.' },
            { title: 'Technique Ratings', desc: 'Users rate technique clarity and usefulness (1-5 stars). Helps surface best content.' },
            { title: 'User-Submitted Techniques', desc: 'Coaches can submit techniques for admin review. Moderation workflow with approval/rejection.' },
            { title: 'Training Logs', desc: 'Users log training sessions, noting which techniques they practiced. Build training history over time.' },
            { title: 'Leaderboards', desc: 'Gamification: most techniques learned, longest streak, most active this week.' },
            { title: 'Study Groups', desc: 'Create groups with shared playlists, discussion threads, and collective progress tracking.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI & Intelligence */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-cyan-400">🤖</span> AI & Intelligent Features
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'AI-Powered Search', desc: 'Natural language search: "How do I escape from mount?" returns relevant techniques.' },
            { title: 'Smart Recommendations', desc: 'Based on learning history, suggest next techniques to study. Like Netflix for BJJ.' },
            { title: 'Auto-Tagging', desc: 'AI analyzes video content and suggests tags, categories, and difficulty levels.' },
            { title: 'Technique Summarizer', desc: 'AI generates technique summaries from video transcripts for quick reference.' },
            { title: 'Form Analysis (Future)', desc: 'Upload your technique video and get AI feedback comparing to reference form.' },
            { title: 'Chatbot Assistant', desc: 'Ask questions about techniques, get explanations, and find related content conversationally.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monetization */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-green-400">💰</span> Monetization & Business Model
        </h3>
        <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 border border-green-500/20 rounded-xl p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Freemium Model', desc: 'Free tier with limited access. Premium unlocks full library, offline mode, and advanced features.' },
              { title: 'Gym/Team Plans', desc: 'Bulk licenses for gyms. Gym admin manages all member accounts from one dashboard.' },
              { title: 'Content Marketplace', desc: 'Featured instructors can sell premium technique courses within the platform.' },
              { title: 'Sponsorships', desc: 'Brand partnerships for equipment sponsors. Non-intrusive sponsored technique sections.' },
              { title: 'Affiliate Integration', desc: 'Link to recommended gear, books, and online courses with affiliate revenue.' },
              { title: 'White-Label Solution', desc: 'License the platform to individual gyms/academies with their own branding.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/20">
                <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Expansion */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-amber-400">📱</span> Platform Expansion
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Native Mobile App', desc: 'React Native app for iOS/Android with better offline, push notifications, and camera integration.', icon: '📱' },
            { title: 'Smart TV App', desc: 'Watch techniques on the big screen for gym classrooms. Chromecast/AirPlay support.', icon: '📺' },
            { title: 'API for Integrations', desc: 'Public API for gym management software, fitness apps, and LMS platforms.', icon: '🔌' },
            { title: 'Browser Extension', desc: 'Quick-access technique lookup while browsing other MMA content online.', icon: '🌐' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Valuable Features */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-indigo-400">⚡</span> Additional Valuable Features
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: 'Technique Chains / Sequences', desc: 'Show how techniques flow into each other. E.g., "If they defend the armbar, transition to triangle."' },
            { title: 'Counters & Reversals', desc: 'For each technique, show known counters. Helps practitioners understand both offense and defense.' },
            { title: 'Anatomy Overlay', desc: 'Visual overlays showing pressure points, leverage points, and body mechanics in technique videos.' },
            { title: 'Competition Library', desc: 'Curated section of techniques seen in UFC/IBJJF competitions with fight footage references.' },
            { title: 'Instructor Biographies', desc: 'Credit the instructor demonstrating, with bio, lineage, and academy information.' },
            { title: 'Printable Cheat Sheets', desc: 'Generate PDF summaries of technique categories for printing and gym bag reference.' },
            { title: 'Video Annotations', desc: 'Admin can add timestamped annotations to videos highlighting key movements and details.' },
            { title: 'Comparison View', desc: 'Side-by-side comparison of technique variations (e.g., different armbar setups from mount).' },
            { title: 'Training Plan Generator', desc: 'Based on belt level and goals, generate a weekly training plan with techniques to focus on.' },
            { title: 'Gym Check-in Integration', desc: 'QR code check-in at gym that tracks attendance and links to that day\'s curriculum.' },
            { title: 'Injury-Safe Alternatives', desc: 'Mark techniques with injury considerations and suggest safe alternatives for common injuries.' },
            { title: 'Multi-Angle Videos', desc: 'Same technique from multiple camera angles (front, side, top-down) for complete understanding.' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-3 bg-gray-800/20 rounded-lg border border-gray-700/20">
              <span className="text-indigo-400 text-xs mt-1">◆</span>
              <div>
                <h4 className="font-medium text-white text-sm">{item.title}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Functional Requirements */}
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">📋 Non-Functional Requirements</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Performance', desc: 'Page load < 2s, video start < 1s, search results < 500ms. Lighthouse score > 90.' },
            { title: 'Scalability', desc: 'Support 10,000+ concurrent users, 100,000+ techniques, horizontal scaling ready.' },
            { title: 'Availability', desc: '99.9% uptime target. Graceful degradation if CDN or search is temporarily unavailable.' },
            { title: 'Accessibility', desc: 'WCAG 2.1 AA compliance. Keyboard navigation, screen reader support, sufficient contrast.' },
            { title: 'SEO', desc: 'Server-side rendering or static generation for technique pages. Structured data markup.' },
            { title: 'Data Privacy', desc: 'GDPR compliant. Data export, account deletion, cookie consent, privacy policy.' },
            { title: 'Backup & Recovery', desc: 'Daily automated backups, point-in-time recovery, disaster recovery plan.' },
            { title: 'Testing', desc: 'Unit tests (>80% coverage), integration tests, E2E tests for critical flows.' },
            { title: 'Documentation', desc: 'API docs (Swagger/OpenAPI), code documentation, user guides, admin manual.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/20">
              <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">📄 Specification Summary</h3>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
          This specification defines a comprehensive MMA Techniques Dictionary platform that serves practitioners 
          of all levels. With a mobile-first responsive design, hierarchical categorization, video/GIF playback, 
          learning progress tracking, and a full-featured admin back-office, this application provides both the 
          content management capabilities and the user experience needed to become an indispensable training companion.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-xs rounded-full">Mobile-First</span>
          <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">Role-Based Access</span>
          <span className="px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">Video + GIF</span>
          <span className="px-3 py-1 bg-amber-600/20 text-amber-300 text-xs rounded-full">Hierarchical Taxonomy</span>
          <span className="px-3 py-1 bg-pink-600/20 text-pink-300 text-xs rounded-full">Learning Tracker</span>
          <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-xs rounded-full">Admin Dashboard</span>
        </div>
      </div>
    </section>
  );
}
