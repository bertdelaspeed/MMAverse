export default function FrontendSection() {
  return (
    <section id="frontend" className="py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-2xl">🖥️</span> Front-End Features
      </h2>
      <p className="text-gray-400 mb-8">User-facing application — the technique dictionary experience</p>

      {/* Navigation & Layout */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-indigo-400">01</span> Navigation & Layout
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Responsive Header', desc: 'Logo, search bar, navigation links, user menu. Collapses to hamburger on mobile.' },
            { title: 'Bottom Navigation (Mobile)', desc: 'Fixed bottom tab bar with Home, Browse, Favorites, Profile for thumb-friendly mobile access.' },
            { title: 'Breadcrumb Navigation', desc: 'Shows path: Discipline > Position > Sub-position for clear context while browsing.' },
            { title: 'Quick Jump Menu', desc: 'Alphabetical sidebar index for quick jumping to techniques starting with specific letters.' },
            { title: 'Dark/Light Mode', desc: 'Theme toggle with system preference detection and manual override.' },
            { title: 'Loading States', desc: 'Skeleton screens for content loading, progress bars for video buffering.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search & Discovery */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-indigo-400">02</span> Search & Discovery
        </h3>
        <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Full-Text Search', desc: 'Search across technique names, descriptions, tags, and categories. Supports partial matching and fuzzy search.' },
              { title: 'Advanced Filters', desc: 'Filter by discipline (BJJ, Muay Thai, Wrestling, Judo, MMA), position, technique type, difficulty level, and belt rank.' },
              { title: 'Category Browser', desc: 'Hierarchical tree navigation: Discipline → Position → Sub-position → Technique Type (Submission, Escape, Sweep, etc.)' },
              { title: 'Tag Cloud', desc: 'Visual tag display showing popular tags. Click to filter techniques by tag (e.g., "gi", "no-gi", "competition").' },
              { title: 'Recently Added', desc: 'Section showing latest techniques added to the dictionary for returning users.' },
              { title: 'Popular Techniques', desc: 'Most viewed/bookmarked techniques displayed prominently for quick access.' },
              { title: 'Random Technique', desc: '"Surprise me" button that shows a random technique for study sessions.' },
              { title: 'Search Suggestions', desc: 'Auto-complete dropdown with technique names, categories, and tags as user types.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 bg-gray-900/30 rounded-lg">
                <span className="text-indigo-400 mt-0.5">▸</span>
                <div>
                  <h4 className="font-medium text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technique Detail View */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-indigo-400">03</span> Technique Detail View
        </h3>
        <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h4 className="font-medium text-white mb-3">📹 Media Player</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Adaptive video player with quality selection (360p, 720p, 1080p)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> GIF auto-loop playback with play/pause controls</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Speed control (0.25x, 0.5x, 0.75x, 1x, 1.5x, 2x)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Frame-by-frame stepping for detailed study</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Fullscreen mode for mobile viewing</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Picture-in-picture support</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> A-B loop feature for repeating specific segments</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">📋 Technique Information</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Technique name (English + native language if applicable)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Rich text description with step-by-step breakdown</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Category breadcrumbs (BJJ &gt; Mount &gt; Escapes)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Difficulty level indicator (Beginner → Advanced)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Belt level recommendation (White, Blue, Purple...)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Tags (gi/no-gi, competition, self-defense)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Common mistakes section</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Key details / tips & tricks</li>
                <li className="flex items-start gap-2"><span className="text-green-400">•</span> Related techniques (chain links)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* User Features */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-indigo-400">04</span> User Features
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: '📌 Bookmarks / Favorites', desc: 'Save techniques to personal collections. Organize into custom folders (e.g., "Mount Escapes", "Competition Prep").' },
            { title: '📊 Learning Tracker', desc: 'Mark techniques as "Learning", "Practiced", or "Mastered". Visual progress dashboard showing completion by category.' },
            { title: '📝 Personal Notes', desc: 'Add private notes to any technique. Rich text support for personal insights, training reminders, and modifications.' },
            { title: '📅 Study Reminders', desc: 'Set reminders to review bookmarked techniques. Spaced repetition suggestions for optimal learning.' },
            { title: '📱 Offline Access', desc: 'Download techniques for offline viewing (PWA capability). Essential for gym use with poor connectivity.' },
            { title: '📤 Share Techniques', desc: 'Share technique links via social media, messaging apps, or generate QR codes for gym posters.' },
            { title: '🎯 Study Sessions', desc: 'Create timed study sessions that cycle through bookmarked techniques. Configurable intervals and shuffle options.' },
            { title: '📈 Progress Statistics', desc: 'Personal dashboard showing techniques learned, time spent studying, streaks, and category breakdowns.' },
            { title: '🔔 Notifications', desc: 'Alerts for new techniques in favorite categories, coach-assigned content, and study reminders.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category Hierarchy Example */}
      <div className="mt-8 bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">📂 Example Category Hierarchy</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
            <h4 className="text-sm font-medium text-indigo-300 mb-2">🥋 Brazilian Jiu-Jitsu</h4>
            <div className="text-xs text-gray-400 space-y-1 pl-3 border-l border-gray-700">
              <p>├── Mount Position</p>
              <p className="pl-3">│ ├── Submissions (Armbar, Triangle...)</p>
              <p className="pl-3">│ ├── Escapes (Upa, Elbow Escape...)</p>
              <p className="pl-3">│ └── Transitions (Back Take...)</p>
              <p>├── Guard Position</p>
              <p className="pl-3">│ ├── Closed Guard</p>
              <p className="pl-3">│ ├── Open Guard</p>
              <p className="pl-3">│ └── Half Guard</p>
              <p>├── Side Control</p>
              <p>├── Back Control</p>
              <p>└── Standing</p>
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
            <h4 className="text-sm font-medium text-red-300 mb-2">🥊 Muay Thai</h4>
            <div className="text-xs text-gray-400 space-y-1 pl-3 border-l border-gray-700">
              <p>├── Striking</p>
              <p className="pl-3">│ ├── Punches</p>
              <p className="pl-3">│ ├── Kicks (Roundhouse, Teep...)</p>
              <p className="pl-3">│ ├── Knees</p>
              <p className="pl-3">│ └── Elbows</p>
              <p>├── Clinch</p>
              <p className="pl-3">│ ├── Positions</p>
              <p className="pl-3">│ └── Techniques</p>
              <p>└── Defense</p>
              <p className="pl-3">├── Checking Kicks</p>
              <p className="pl-3">└── Parrying</p>
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
            <h4 className="text-sm font-medium text-yellow-300 mb-2">🤼 Wrestling</h4>
            <div className="text-xs text-gray-400 space-y-1 pl-3 border-l border-gray-700">
              <p>├── Takedowns</p>
              <p className="pl-3">│ ├── Single Leg</p>
              <p className="pl-3">│ ├── Double Leg</p>
              <p className="pl-3">│ └── Throws</p>
              <p>├── Takedown Defense</p>
              <p>├── Pins</p>
              <p className="pl-3">│ ├── Half Nelson</p>
              <p className="pl-3">│ └── Cross Body</p>
              <p>└── Turns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
