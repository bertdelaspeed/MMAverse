import { useParams, Link } from 'react-router-dom';
import { useTechniqueStore } from '../store/techniqueStore';
import { useBookmarkStore } from '../store/userStores';
import { useProgressStore } from '../store/userStores';
import { useAuthStore } from '../store/authStore';
import { categories } from '../data/mockData';
import {
  Bookmark, BookmarkCheck, Play, ChevronRight, Star,
  AlertTriangle, Lightbulb, ArrowLeft, ListChecks, FileText
} from 'lucide-react';
import { useState } from 'react';

export default function TechniqueDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { getTechniqueBySlug } = useTechniqueStore();
  const { isAuthenticated } = useAuthStore();
  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarkStore();
  const { progress, setProgress, notes, setNote } = useProgressStore();
  const [activeTab, setActiveTab] = useState<'steps' | 'tips' | 'notes'>('steps');
  const [noteText, setNoteText] = useState('');

  const technique = getTechniqueBySlug(slug || '');

  if (!technique) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="text-6xl mb-4">🥋</div>
        <h1 className="text-2xl font-bold text-white mb-2">Technique Not Found</h1>
        <p className="text-gray-400 mb-6">The technique you're looking for doesn't exist.</p>
        <Link to="/browse" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Browse Techniques
        </Link>
      </div>
    );
  }

  const discipline = categories.find(c => c.id === technique.disciplineId);
  const position = categories.find(c => c.id === technique.positionId);
  const type = categories.find(c => c.id === technique.typeId);
  const relatedTechs = technique.relatedTechniques
    .map(id => useTechniqueStore.getState().getTechniqueById(id))
    .filter(Boolean);

  const bookmarked = isBookmarked(technique.id);
  const currentProgress = progress[technique.id] || 'not_started';
  const currentNote = notes[technique.id] || '';

  const progressColors: Record<string, string> = {
    not_started: 'bg-gray-700 text-gray-300',
    learning: 'bg-yellow-600/20 text-yellow-400 border-yellow-500/30',
    practiced: 'bg-blue-600/20 text-blue-400 border-blue-500/30',
    mastered: 'bg-green-600/20 text-green-400 border-green-500/30',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link to="/browse" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Browse
      </Link>

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm mb-4 flex-wrap">
        <Link to="/browse" className="text-gray-400 hover:text-white">All</Link>
        {discipline && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <Link to={`/browse?discipline=${discipline.id}`} className="text-gray-400 hover:text-red-400">
              {discipline.icon} {discipline.name}
            </Link>
          </>
        )}
        {position && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <Link to={`/browse?discipline=${technique.disciplineId}&position=${position.id}`} className="text-gray-400 hover:text-red-400">
              {position.name}
            </Link>
          </>
        )}
        {type && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-red-400">{type.name}</span>
          </>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Video Player Area */}
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800 mb-6">
            <img
              src={technique.thumbnailUrl}
              alt={technique.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-20 h-20 bg-red-600/90 hover:bg-red-600 rounded-full flex items-center justify-center transition-all shadow-2xl shadow-red-900/50 hover:scale-110">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-3 py-1 bg-red-600/90 text-white text-sm rounded-lg font-medium">
                {technique.mediaType === 'video' ? '▶ Video' : '🎞 GIF'}
              </span>
            </div>
            {/* Speed controls mockup */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1">
              {['0.5x', '1x', '1.5x', '2x'].map(speed => (
                <button key={speed} className={`px-2 py-1 text-xs rounded ${speed === '1x' ? 'bg-white/20 text-white' : 'bg-black/40 text-gray-300 hover:bg-black/60'}`}>
                  {speed}
                </button>
              ))}
            </div>
          </div>

          {/* Title & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{technique.name}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400" />
                  Difficulty: {'⭐'.repeat(technique.difficulty)}
                </span>
                <span>•</span>
                <span>{technique.views.toLocaleString()} views</span>
              </div>
            </div>
            {isAuthenticated && (
              <button
                onClick={() => toggleBookmark(technique.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  bookmarked
                    ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                    : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
                }`}
              >
                {bookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                {bookmarked ? 'Saved' : 'Save'}
              </button>
            )}
          </div>

          {/* Description */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-bold text-white mb-3">About This Technique</h2>
            <p className="text-gray-300 leading-relaxed">{technique.description}</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-800 mb-6">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab('steps')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'steps' ? 'border-red-500 text-red-400' : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <ListChecks className="w-4 h-4 inline mr-1" /> Steps
              </button>
              <button
                onClick={() => setActiveTab('tips')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'tips' ? 'border-red-500 text-red-400' : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Lightbulb className="w-4 h-4 inline mr-1" /> Tips & Mistakes
              </button>
              {isAuthenticated && (
                <button
                  onClick={() => { setActiveTab('notes'); setNoteText(currentNote); }}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'notes' ? 'border-red-500 text-red-400' : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-4 h-4 inline mr-1" /> My Notes
                </button>
              )}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'steps' && (
            <div className="space-y-4">
              {technique.steps.map((step, i) => (
                <div key={i} className="flex gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
                  <div className="w-8 h-8 bg-red-600/20 text-red-400 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" /> Tips & Key Points
                </h3>
                <ul className="space-y-2">
                  {technique.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-bold text-amber-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Common Mistakes
                </h3>
                <ul className="space-y-2">
                  {technique.commonMistakes.map((mistake, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-amber-400 mt-0.5">✗</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'notes' && isAuthenticated && (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" /> Personal Notes
              </h3>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add your personal notes about this technique..."
                className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500 resize-none"
              />
              <button
                onClick={() => setNote(technique.id, noteText)}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
              >
                Save Notes
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Progress Tracker */}
          {isAuthenticated && (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-white mb-3">Learning Progress</h3>
              <div className="grid grid-cols-2 gap-2">
                {(['not_started', 'learning', 'practiced', 'mastered'] as const).map(status => (
                  <button
                    key={status}
                    onClick={() => setProgress(technique.id, status)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                      currentProgress === status
                        ? progressColors[status]
                        : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700'
                    }`}
                  >
                    {status === 'not_started' ? 'Not Started' :
                     status === 'learning' ? '📖 Learning' :
                     status === 'practiced' ? '🔄 Practiced' : '✅ Mastered'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Belt Levels */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
            <h3 className="font-bold text-white mb-3">Recommended Belt Level</h3>
            <div className="flex flex-wrap gap-2">
              {technique.beltLevels.map(belt => (
                <span key={belt} className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                  belt === 'white' ? 'bg-white/10 text-white border-white/20' :
                  belt === 'blue' ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' :
                  belt === 'purple' ? 'bg-purple-600/20 text-purple-400 border-purple-500/30' :
                  belt === 'brown' ? 'bg-amber-600/20 text-amber-400 border-amber-500/30' :
                  'bg-gray-900 text-gray-300 border-gray-600'
                }`}>
                  {belt.charAt(0).toUpperCase() + belt.slice(1)}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
            <h3 className="font-bold text-white mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {technique.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-lg border border-gray-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Techniques */}
          {relatedTechs.length > 0 && (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="font-bold text-white mb-3">Related Techniques</h3>
              <div className="space-y-2">
                {relatedTechs.map(tech => tech && (
                  <Link
                    key={tech.id}
                    to={`/technique/${tech.slug}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors group"
                  >
                    <div className="w-12 h-8 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                      <img src={tech.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-red-400 transition-colors line-clamp-1">
                      {tech.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
