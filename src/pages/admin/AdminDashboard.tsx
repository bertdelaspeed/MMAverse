import { useTechniqueStore } from '../../store/techniqueStore';
import { categories } from '../../data/mockData';
import { users } from '../../data/mockData';
import { Film, Users, Eye, Bookmark, TrendingUp, FolderTree } from 'lucide-react';

export default function AdminDashboard() {
  const { techniques } = useTechniqueStore();
  const published = techniques.filter(t => t.status === 'published');
  const drafts = techniques.filter(t => t.status === 'draft');
  const totalViews = published.reduce((sum, t) => sum + t.views, 0);
  const totalBookmarks = published.reduce((sum, t) => sum + t.bookmarks, 0);
  const disciplines = categories.filter(c => c.type === 'discipline');

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: <Film className="w-6 h-6 text-red-400" />, label: 'Total Techniques', value: techniques.length, sub: `${drafts.length} drafts`, color: 'border-red-500/20' },
          { icon: <Users className="w-6 h-6 text-blue-400" />, label: 'Total Users', value: users.length, sub: '3 active', color: 'border-blue-500/20' },
          { icon: <Eye className="w-6 h-6 text-green-400" />, label: 'Total Views', value: totalViews.toLocaleString(), sub: 'All time', color: 'border-green-500/20' },
          { icon: <Bookmark className="w-6 h-6 text-amber-400" />, label: 'Total Bookmarks', value: totalBookmarks.toLocaleString(), sub: 'By users', color: 'border-amber-500/20' },
        ].map(stat => (
          <div key={stat.label} className={`bg-gray-900 border ${stat.color} rounded-xl p-5`}>
            <div className="flex items-center justify-between mb-3">
              {stat.icon}
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            <div className="text-xs text-gray-500 mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Techniques by Discipline */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FolderTree className="w-5 h-5 text-gray-400" /> Techniques by Discipline
          </h3>
          <div className="space-y-3">
            {disciplines.map(disc => {
              const count = published.filter(t => t.disciplineId === disc.id).length;
              const percentage = published.length > 0 ? (count / published.length) * 100 : 0;
              return (
                <div key={disc.id}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-300">{disc.icon} {disc.name}</span>
                    <span className="text-gray-400">{count}</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Recent Techniques</h3>
          <div className="space-y-3">
            {[...published]
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .slice(0, 5)
              .map(tech => (
                <div key={tech.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50">
                  <div className="w-12 h-8 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                    <img src={tech.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{tech.name}</p>
                    <p className="text-xs text-gray-500">{tech.createdAt} • {tech.views.toLocaleString()} views</p>
                  </div>
                  <span className="px-2 py-0.5 bg-green-600/20 text-green-400 text-xs rounded">Published</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Top Techniques */}
      <div className="mt-6 bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">🏆 Top Performing Techniques</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-2 text-gray-400 font-medium">Technique</th>
                <th className="text-left py-3 px-2 text-gray-400 font-medium">Discipline</th>
                <th className="text-right py-3 px-2 text-gray-400 font-medium">Views</th>
                <th className="text-right py-3 px-2 text-gray-400 font-medium">Bookmarks</th>
                <th className="text-right py-3 px-2 text-gray-400 font-medium">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {[...published]
                .sort((a, b) => b.views - a.views)
                .slice(0, 5)
                .map((tech, i) => {
                  const disc = categories.find(c => c.id === tech.disciplineId);
                  return (
                    <tr key={tech.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400 font-bold">#{i + 1}</span>
                          <span className="text-white">{tech.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-gray-400">{disc?.icon} {disc?.name}</td>
                      <td className="py-3 px-2 text-right text-gray-300">{tech.views.toLocaleString()}</td>
                      <td className="py-3 px-2 text-right text-gray-300">{tech.bookmarks}</td>
                      <td className="py-3 px-2 text-right text-gray-300">{'⭐'.repeat(tech.difficulty)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
