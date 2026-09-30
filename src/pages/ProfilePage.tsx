import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useBookmarkStore, useProgressStore } from '../store/userStores';
import { useTechniqueStore } from '../store/techniqueStore';
import { User, Bookmark, Target, Calendar, Shield } from 'lucide-react';

export default function ProfilePage() {
  const { isAuthenticated, user } = useAuthStore();
  const { bookmarks } = useBookmarkStore();
  const { progress } = useProgressStore();
  const { techniques } = useTechniqueStore();

  if (!isAuthenticated || !user) return <Navigate to="/login" />;

  const progressEntries = Object.entries(progress);
  const mastered = progressEntries.filter(([, v]) => v === 'mastered').length;
  const practiced = progressEntries.filter(([, v]) => v === 'practiced').length;
  const learning = progressEntries.filter(([, v]) => v === 'learning').length;

  const roleColors: Record<string, string> = {
    super_admin: 'bg-amber-600/20 text-amber-400 border-amber-500/30',
    content_admin: 'bg-purple-600/20 text-purple-400 border-purple-500/30',
    coach: 'bg-green-600/20 text-green-400 border-green-500/30',
    student: 'bg-blue-600/20 text-blue-400 border-blue-500/30',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/50">
            <span className="text-white font-black text-3xl">{user.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
            <p className="text-gray-400 text-sm">{user.email}</p>
            <div className="flex items-center gap-3 mt-3 flex-wrap justify-center sm:justify-start">
              <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${roleColors[user.role]}`}>
                <Shield className="w-3 h-3 inline mr-1" />
                {user.role.replace('_', ' ').toUpperCase()}
              </span>
              {user.beltLevel && (
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs border border-gray-700">
                  {user.beltLevel.charAt(0).toUpperCase() + user.beltLevel.slice(1)} Belt
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { icon: <Bookmark className="w-6 h-6 text-red-400" />, label: 'Saved', value: bookmarks.length },
          { icon: <Target className="w-6 h-6 text-green-400" />, label: 'Mastered', value: mastered },
          { icon: <Target className="w-6 h-6 text-blue-400" />, label: 'Practiced', value: practiced },
          { icon: <Target className="w-6 h-6 text-yellow-400" />, label: 'Learning', value: learning },
        ].map(stat => (
          <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Account Info */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-gray-400" /> Account Information
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide">Member Since</label>
            <p className="text-gray-300 flex items-center gap-2 mt-1">
              <Calendar className="w-4 h-4 text-gray-500" />
              {user.createdAt}
            </p>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide">Last Login</label>
            <p className="text-gray-300 mt-1">{user.lastLogin}</p>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide">Total Techniques</label>
            <p className="text-gray-300 mt-1">{techniques.filter(t => t.status === 'published').length} available</p>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wide">Account Status</label>
            <p className="text-green-400 mt-1">● Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
