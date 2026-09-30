export default function UserRolesSection() {
  const roles = [
    {
      name: 'Super Admin',
      icon: '👑',
      color: 'amber',
      description: 'Full system access including platform configuration, user management, and content oversight.',
      permissions: [
        'Manage all user accounts and roles',
        'Configure system settings and categories',
        'Upload, edit, and delete all content',
        'View analytics and usage data',
        'Manage subscription plans and billing',
        'Access audit logs',
        'Platform-wide content moderation',
      ],
    },
    {
      name: 'Content Admin',
      icon: '📝',
      color: 'indigo',
      description: 'Responsible for managing technique content — uploading videos, organizing categories, and maintaining the dictionary.',
      permissions: [
        'Upload and manage technique videos/GIFs',
        'Edit technique descriptions and metadata',
        'Create and manage categories/tags',
        'Organize techniques into hierarchies',
        'Generate thumbnails and previews',
        'Cannot manage users or system settings',
      ],
    },
    {
      name: 'Coach / Instructor',
      icon: '🏋️',
      color: 'green',
      description: 'Can curate technique playlists for their students and track student progress.',
      permissions: [
        'Create curated technique playlists',
        'Share playlists with assigned students',
        'Add personal notes to techniques',
        'View student progress on assigned content',
        'Cannot modify base content',
      ],
    },
    {
      name: 'Student / Member',
      icon: '🥋',
      color: 'blue',
      description: 'End users who browse, search, and study techniques. Can bookmark favorites and track personal progress.',
      permissions: [
        'Browse and search the technique dictionary',
        'Watch technique videos and GIFs',
        'Bookmark favorite techniques',
        'Track personal learning progress',
        'View coach-assigned playlists',
        'Add personal notes (private)',
        'Filter by discipline, position, difficulty',
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    amber: { bg: 'from-amber-900/20', border: 'border-amber-500/20', text: 'text-amber-300', badge: 'bg-amber-500/20 text-amber-300' },
    indigo: { bg: 'from-indigo-900/20', border: 'border-indigo-500/20', text: 'text-indigo-300', badge: 'bg-indigo-500/20 text-indigo-300' },
    green: { bg: 'from-green-900/20', border: 'border-green-500/20', text: 'text-green-300', badge: 'bg-green-500/20 text-green-300' },
    blue: { bg: 'from-blue-900/20', border: 'border-blue-500/20', text: 'text-blue-300', badge: 'bg-blue-500/20 text-blue-300' },
  };

  return (
    <section id="user-roles" className="py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-2xl">👥</span> User Roles & Permissions
      </h2>
      <p className="text-gray-400 mb-8">Role-based access control (RBAC) with four distinct user types</p>

      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((role) => {
          const colors = colorMap[role.color];
          return (
            <div
              key={role.name}
              className={`bg-gradient-to-br ${colors.bg} to-gray-900/50 border ${colors.border} rounded-xl p-6`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{role.icon}</span>
                <div>
                  <h3 className={`text-lg font-semibold ${colors.text}`}>{role.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{role.description}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {role.permissions.map((perm, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className={`${colors.text} text-xs mt-1`}>▸</span>
                    <span className="text-gray-300 text-sm">{perm}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Access Flow */}
      <div className="mt-8 bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🔐 Authentication & Access Flow</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { step: '1', title: 'Registration', desc: 'Email/password or OAuth (Google, Apple)' },
            { step: '2', title: 'Email Verification', desc: 'Verify email before account activation' },
            { step: '3', title: 'Role Assignment', desc: 'Admin assigns role or self-registers as Student' },
            { step: '4', title: 'Access Granted', desc: 'JWT-based session with role-specific permissions' },
          ].map((item) => (
            <div key={item.step} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                {item.step}
              </div>
              <h4 className="font-medium text-white text-sm">{item.title}</h4>
              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
