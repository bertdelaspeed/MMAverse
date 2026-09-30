export default function OverviewSection() {
  return (
    <section id="overview" className="py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-2xl">🎯</span> Vision & Goals
      </h2>
      <p className="text-gray-400 mb-8">What this application aims to achieve</p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Vision */}
        <div className="bg-gradient-to-br from-indigo-900/30 to-gray-900/50 border border-indigo-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-indigo-300 mb-3">🔭 Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            To become the definitive digital reference for martial arts techniques — a platform where 
            practitioners at any level can quickly find, study, and learn techniques through high-quality 
            video demonstrations, organized by discipline, position, and technique type.
          </p>
        </div>

        {/* Problem */}
        <div className="bg-gradient-to-br from-red-900/20 to-gray-900/50 border border-red-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-300 mb-3">⚠️ Problem Statement</h3>
          <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
            <li>• Practitioners struggle to find specific techniques across scattered YouTube playlists</li>
            <li>• No centralized, organized reference organized by martial art taxonomy</li>
            <li>• Difficulty finding techniques by position or situation during training</li>
            <li>• No way to track which techniques have been learned or need practice</li>
            <li>• Gym coaches lack a tool to share technique libraries with students</li>
          </ul>
        </div>

        {/* Goals */}
        <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 border border-green-500/20 rounded-xl p-6 md:col-span-2">
          <h3 className="text-lg font-semibold text-green-300 mb-3">🎯 Core Goals</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Provide a fast, searchable video dictionary of MMA techniques',
              'Support hierarchical categorization (Discipline → Position → Type)',
              'Allow both video and GIF format for different use cases',
              'Enable admin-controlled content management via back-office',
              'Support role-based access control for different user types',
              'Be fully mobile-responsive for use at the gym',
              'Allow users to bookmark and organize favorite techniques',
              'Provide technique descriptions with key details',
              'Support future expansion with community features',
            ].map((goal, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                <span className="text-gray-300 text-sm">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Users */}
      <div className="mt-8 bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">👥 Target Audience</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'BJJ Practitioners', desc: 'White to black belt looking for technique references', icon: '🥋' },
            { title: 'MMA Fighters', desc: 'Cross-training athletes needing quick technique review', icon: '🥊' },
            { title: 'Coaches & Instructors', desc: 'Sharing curated technique libraries with students', icon: '📋' },
            { title: 'Gym Owners', desc: 'Providing value-added digital resources to members', icon: '🏢' },
          ].map((user) => (
            <div key={user.title} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
              <div className="text-2xl mb-2">{user.icon}</div>
              <h4 className="font-medium text-white text-sm">{user.title}</h4>
              <p className="text-xs text-gray-400 mt-1">{user.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
