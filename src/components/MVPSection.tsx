export default function MVPSection() {
  return (
    <section id="mvp" className="py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-2xl">🚀</span> MVP & Development Roadmap
      </h2>
      <p className="text-gray-400 mb-8">Phased delivery plan from MVP to full-featured platform</p>

      {/* Phase 1: MVP */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-green-600/20 text-green-300 text-xs font-semibold rounded-full border border-green-500/30">PHASE 1</span>
          <h3 className="text-xl font-semibold text-white">MVP — Core Dictionary (8-10 weeks)</h3>
        </div>
        <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 border border-green-500/20 rounded-xl p-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <h4 className="font-medium text-green-300 mb-3">✅ Must Have (Front-End)</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> User authentication (register, login, logout)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Browse techniques by category hierarchy</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Technique detail page with video/GIF player</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Basic search (by name and description)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Filter by discipline and position</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Mobile-responsive layout</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Bookmark/favorite techniques</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-300 mb-3">✅ Must Have (Back-Office)</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Admin login with role protection</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Upload video/GIF with format choice</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Create/edit/delete techniques</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Manage categories (disciplines, positions)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Basic user management (list, create, delete)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Assign roles to users</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Technique draft/publish workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/30">PHASE 2</span>
          <h3 className="text-xl font-semibold text-white">Enhanced Experience (6-8 weeks)</h3>
        </div>
        <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/50 border border-blue-500/20 rounded-xl p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Advanced search with filters (difficulty, belt, tags)',
              'Video speed control and A-B loop',
              'Personal learning progress tracker',
              'Personal notes on techniques',
              'Tag system with tag cloud',
              'Related techniques linking',
              'Common mistakes & tips sections',
              'Coach role with student assignment',
              'Curated playlists/collections',
              'Email notifications (new content, assignments)',
              'Admin analytics dashboard',
              'Bulk upload with CSV import',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-2 bg-gray-900/30 rounded-lg">
                <span className="text-blue-400 text-xs mt-0.5">▸</span>
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">PHASE 3</span>
          <h3 className="text-xl font-semibold text-white">Scale & Polish (4-6 weeks)</h3>
        </div>
        <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 border border-purple-500/20 rounded-xl p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'PWA with offline support',
              'Study session mode with timer',
              'Progress statistics dashboard',
              'Dark/light theme toggle',
              'Multi-language support (i18n)',
              'Video quality selection',
              'Picture-in-picture mode',
              'Share techniques (link, QR code)',
              'Admin content scheduling',
              'Performance optimization (lazy loading, virtual scroll)',
              'Accessibility audit (WCAG 2.1 AA)',
              'SEO optimization (meta tags, sitemap)',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-2 bg-gray-900/30 rounded-lg">
                <span className="text-purple-400 text-xs mt-0.5">▸</span>
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">📅 Estimated Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
          <div className="space-y-6 pl-10">
            {[
              { week: 'Week 1-2', task: 'Project setup, DB schema, auth system, basic API', status: 'foundation' },
              { week: 'Week 3-4', task: 'Front-end browse experience, category navigation, video player', status: 'core-ui' },
              { week: 'Week 5-6', task: 'Back-office CMS, upload pipeline, video/GIF conversion', status: 'admin' },
              { week: 'Week 7-8', task: 'Search, bookmarks, mobile optimization, testing', status: 'mvp-complete' },
              { week: 'Week 9-12', task: 'Phase 2 features: progress tracking, playlists, analytics', status: 'enhancement' },
              { week: 'Week 13-16', task: 'Phase 3: PWA, i18n, performance, accessibility', status: 'polish' },
              { week: 'Week 17-18', task: 'Beta testing, bug fixes, launch preparation', status: 'launch' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[26px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-gray-900" />
                <div className="bg-gray-900/30 rounded-lg p-3 border border-gray-700/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-indigo-300">{item.week}</span>
                    <span className="px-2 py-0.5 bg-indigo-600/20 text-indigo-300 text-xs rounded">{item.status}</span>
                  </div>
                  <p className="text-sm text-gray-300">{item.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
