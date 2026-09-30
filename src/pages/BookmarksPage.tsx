import { Link } from 'react-router-dom';
import { useBookmarkStore, useProgressStore } from '../store/userStores';
import { useTechniqueStore } from '../store/techniqueStore';
import { useAuthStore } from '../store/authStore';
import { categories } from '../data/mockData';
import { Bookmark, Eye, Trash2, ArrowRight } from 'lucide-react';
import { Navigate } from 'react-router-dom';

export default function BookmarksPage() {
  const { isAuthenticated } = useAuthStore();
  const { bookmarks, toggleBookmark } = useBookmarkStore();
  const { progress } = useProgressStore();
  const { techniques } = useTechniqueStore();

  if (!isAuthenticated) return <Navigate to="/login" />;

  const bookmarkedTechniques = techniques.filter(t => bookmarks.includes(t.id));

  const progressCounts = {
    not_started: bookmarkedTechniques.filter(t => !progress[t.id] || progress[t.id] === 'not_started').length,
    learning: bookmarkedTechniques.filter(t => progress[t.id] === 'learning').length,
    practiced: bookmarkedTechniques.filter(t => progress[t.id] === 'practiced').length,
    mastered: bookmarkedTechniques.filter(t => progress[t.id] === 'mastered').length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <Bookmark className="w-8 h-8 text-red-400" />
          Saved Techniques
        </h1>
        <p className="text-gray-400 mt-1">{bookmarkedTechniques.length} techniques saved</p>
      </div>

      {/* Progress Overview */}
      {bookmarkedTechniques.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Not Started', count: progressCounts.not_started, color: 'text-gray-400 bg-gray-800' },
            { label: 'Learning', count: progressCounts.learning, color: 'text-yellow-400 bg-yellow-600/20' },
            { label: 'Practiced', count: progressCounts.practiced, color: 'text-blue-400 bg-blue-600/20' },
            { label: 'Mastered', count: progressCounts.mastered, color: 'text-green-400 bg-green-600/20' },
          ].map(item => (
            <div key={item.label} className={`rounded-xl p-4 text-center ${item.color} border border-gray-700/50`}>
              <div className="text-2xl font-bold">{item.count}</div>
              <div className="text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {bookmarkedTechniques.length > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Overall Progress</span>
            <span className="text-sm text-white font-bold">
              {Math.round(((progressCounts.practiced + progressCounts.mastered) / bookmarkedTechniques.length) * 100)}%
            </span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden flex">
            <div className="bg-green-500 h-full" style={{ width: `${(progressCounts.mastered / bookmarkedTechniques.length) * 100}%` }} />
            <div className="bg-blue-500 h-full" style={{ width: `${(progressCounts.practiced / bookmarkedTechniques.length) * 100}%` }} />
            <div className="bg-yellow-500 h-full" style={{ width: `${(progressCounts.learning / bookmarkedTechniques.length) * 100}%` }} />
          </div>
        </div>
      )}

      {/* Bookmarked List */}
      {bookmarkedTechniques.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📌</div>
          <h3 className="text-xl font-bold text-white mb-2">No saved techniques yet</h3>
          <p className="text-gray-400 mb-6">Browse techniques and save your favorites to track your progress</p>
          <Link to="/browse" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Browse Techniques <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarkedTechniques.map(tech => {
            const disc = categories.find(c => c.id === tech.disciplineId);
            const pos = categories.find(c => c.id === tech.positionId);
            const techProgress = progress[tech.id] || 'not_started';
            return (
              <div key={tech.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group hover:border-red-500/50 transition-all">
                <Link to={`/technique/${tech.slug}`} className="block">
                  <div className="relative aspect-video bg-gray-800">
                    <img src={tech.thumbnailUrl} alt={tech.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-0.5 text-xs rounded font-medium ${
                        techProgress === 'mastered' ? 'bg-green-600/90 text-white' :
                        techProgress === 'practiced' ? 'bg-blue-600/90 text-white' :
                        techProgress === 'learning' ? 'bg-yellow-600/90 text-white' :
                        'bg-gray-700/90 text-gray-300'
                      }`}>
                        {techProgress === 'not_started' ? 'Not Started' :
                         techProgress === 'learning' ? '📖 Learning' :
                         techProgress === 'practiced' ? '🔄 Practiced' : '✅ Mastered'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-sm group-hover:text-red-400 transition-colors line-clamp-2">{tech.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{disc?.icon} {disc?.name} • {pos?.name}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {tech.views.toLocaleString()}</span>
                      <span>{'⭐'.repeat(tech.difficulty)}</span>
                    </div>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <button
                    onClick={() => toggleBookmark(tech.id)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 hover:bg-red-600/20 text-gray-400 hover:text-red-400 rounded-lg text-xs transition-colors"
                  >
                    <Trash2 className="w-3 h-3" /> Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
