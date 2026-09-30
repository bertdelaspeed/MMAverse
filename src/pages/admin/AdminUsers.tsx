import { useState } from 'react';
import { users as initialUsers } from '../../data/mockData';
import { Search, UserPlus, Shield, Mail, Calendar } from 'lucide-react';

export default function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<string>('all');

  const filtered = initialUsers.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || u.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const roleColors: Record<string, string> = {
    super_admin: 'bg-amber-600/20 text-amber-400 border-amber-500/30',
    content_admin: 'bg-purple-600/20 text-purple-400 border-purple-500/30',
    coach: 'bg-green-600/20 text-green-400 border-green-500/30',
    student: 'bg-blue-600/20 text-blue-400 border-blue-500/30',
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-white">Manage Users</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium">
          <UserPlus className="w-4 h-4" /> Invite User
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
        </div>
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-red-500"
        >
          <option value="all">All Roles</option>
          <option value="super_admin">Super Admin</option>
          <option value="content_admin">Content Admin</option>
          <option value="coach">Coach</option>
          <option value="student">Student</option>
        </select>
      </div>

      {/* Users Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(user => (
          <div key={user.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">{user.name.charAt(0)}</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-white truncate">{user.name}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1 truncate">
                  <Mail className="w-3 h-3" /> {user.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-0.5 text-xs rounded font-medium border ${roleColors[user.role]}`}>
                <Shield className="w-3 h-3 inline mr-1" />
                {user.role.replace('_', ' ')}
              </span>
              {user.isActive ? (
                <span className="px-2 py-0.5 bg-green-600/20 text-green-400 text-xs rounded">Active</span>
              ) : (
                <span className="px-2 py-0.5 bg-red-600/20 text-red-400 text-xs rounded">Inactive</span>
              )}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Joined {user.createdAt}
              </span>
              <span>Last: {user.lastLogin}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
