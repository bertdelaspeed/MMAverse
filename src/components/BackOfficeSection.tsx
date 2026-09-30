export default function BackOfficeSection() {
  return (
    <section id="backoffice" className="py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-2xl">⚙️</span> Back-Office Features
      </h2>
      <p className="text-gray-400 mb-8">Admin dashboard for content management, user administration, and platform configuration</p>

      {/* Content Management */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-purple-400">01</span> Content Management System (CMS)
        </h3>
        <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h4 className="font-medium text-purple-300 mb-3">📹 Video/GIF Upload</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Drag-and-drop file upload with progress indicator</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Format conversion toggle: Video ↔ GIF before upload</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Supported formats: MP4, WebM, MOV, AVI (video); GIF, WebP (animation)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Auto-generate thumbnail from video (select frame or auto-pick)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Video transcoding to multiple resolutions (360p, 720p, 1080p)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> File size limits with admin-configurable thresholds</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Bulk upload support with CSV metadata import</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Video trimming tool (set start/end points)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-300 mb-3">📝 Technique Editor</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Rich text editor for technique descriptions</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Step-by-step breakdown editor with numbered steps</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Category selector with hierarchical tree (Discipline → Position → Type)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Tag input with auto-suggestions from existing tags</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Difficulty level selector (1-5 scale with visual indicator)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Belt level multi-select (White through Black)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Related techniques linker (search and connect)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Common mistakes editor with severity levels</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Tips & tricks section with priority ordering</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Draft/Published status with scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Category Management */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-purple-400">02</span> Category & Taxonomy Management
        </h3>
        <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Discipline CRUD', desc: 'Create, read, update, delete martial art disciplines (BJJ, Muay Thai, Wrestling, Judo, MMA, etc.)' },
              { title: 'Position Management', desc: 'Manage positions within each discipline with drag-and-drop reordering.' },
              { title: 'Sub-Position Editor', desc: 'Create sub-categories (e.g., Closed Guard → Spider Guard, De La Riva, etc.)' },
              { title: 'Technique Type Tags', desc: 'Manage technique types: Submission, Escape, Sweep, Takedown, Transition, Defense, etc.' },
              { title: 'Custom Taxonomies', desc: 'Create custom category trees for specialized content (e.g., "Competition Techniques", "Self-Defense").' },
              { title: 'Category Analytics', desc: 'View technique counts per category, identify gaps in content coverage.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/20">
                <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Management */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-purple-400">03</span> User Management
        </h3>
        <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h4 className="font-medium text-purple-300 mb-3">👤 User Administration</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> User list with search, filter by role, status, registration date</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Create new users manually or via invitation email</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Edit user profiles, roles, and permissions</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Suspend/activate user accounts</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Reset passwords and send recovery emails</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Bulk user operations (import/export CSV)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> View user activity logs and last login</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Assign students to coaches</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-300 mb-3">📊 User Analytics</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Total registered users with growth chart</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Active users (daily/weekly/monthly)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> User retention metrics</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Role distribution pie chart</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Most active users leaderboard</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Student progress reports per coach</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Geographic distribution of users</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Device type breakdown (mobile vs desktop)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-purple-400">04</span> Platform Settings
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: '🎨 Appearance', desc: 'Theme colors, logo upload, favicon, custom CSS for branding.' },
            { title: '📧 Email Templates', desc: 'Customize welcome emails, password resets, notifications, and invitations.' },
            { title: '🔒 Security', desc: 'Password policies, session timeouts, 2FA settings, IP whitelisting.' },
            { title: '📦 Storage', desc: 'Configure upload limits, storage provider (S3, local), CDN settings.' },
            { title: '🌐 Localization', desc: 'Manage supported languages, default locale, date/time formats.' },
            { title: '📊 Feature Flags', desc: 'Enable/disable features globally or per role for gradual rollouts.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Overview */}
      <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-purple-300 mb-4">📊 Admin Dashboard Overview</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Techniques', value: '—', icon: '📹' },
            { label: 'Total Users', value: '—', icon: '👥' },
            { label: 'Storage Used', value: '—', icon: '💾' },
            { label: 'Pending Reviews', value: '—', icon: '⏳' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Dashboard displays real-time metrics with charts for content growth, user engagement, and system health.
        </p>
      </div>
    </section>
  );
}
