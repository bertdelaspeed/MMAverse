import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTechniqueStore } from '../store/techniqueStore';
import { categories } from '../data/mockData';
import { Search as SearchIcon, Eye, Bookmark, X, SlidersHorizontal } from 'lucide-react';

export default function SearchPage() {
  const { searchTechniques } = useTechniqueStore();
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    disciplineId: '',
    difficulty: 0,
  });

  const results = useMemo(() => {
    return searchTechniques(query, {
      disciplineId: filters.disciplineId || undefined,
      difficulty: filters.difficulty || undefined,
    });
  }, [query, filters, searchTechniques]);

  const disciplines = categories.filter(c => c.type === 'discipline');

  const clearAll = () => {
    setQuery('');
    setFilters({ disciplineId: '', difficulty: 0 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Search Techniques</h1>
        <p className="text-gray-400">Find techniques by name, description, or tags</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for techniques... (e.g., 'armbar', 'escape from mount', 'roundhouse')"
          className="w-full pl-12 pr-12 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-lg"
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Toggle & Active Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showFilters ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>

        {(filters.disciplineId || filters.difficulty) && (
          <button onClick={clearAll} className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
            <X className="w-3 h-3" /> Clear filters
          </button>
        )}

        <span className="text-sm text-gray-500 ml-auto">
          {results.length} result{results.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Discipline</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters(f => ({ ...f, disciplineId: '' }))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    !filters.disciplineId ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'
                  }`}
                >
                  All
                </button>
                {disciplines.map(disc => (
                  <button
                    key={disc.id}
                    onClick={() => setFilters(f => ({ ...f, disciplineId: disc.id }))}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      filters.disciplineId === disc.id ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'
                    }`}
                  >
                    {disc.icon} {disc.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Difficulty</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters(f => ({ ...f, difficulty: 0 }))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    !filters.difficulty ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'
                  }`}
                >
                  All
                </button>
                {[1, 2, 3, 4, 5].map(d => (
                  <button
                    key={d}
                    onClick={() => setFilters(f => ({ ...f, difficulty: d }))}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      filters.difficulty === d ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'
                    }`}
                  >
                    {'⭐'.repeat(d)} ({d})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-white mb-2">
            {query ? 'No results found' : 'Start typing to search'}
          </h3>
          <p className="text-gray-400">
            {query ? 'Try different keywords or adjust your filters' : 'Search by technique name, description, or tags'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {results.map((tech) => {
            const disc = categories.find(c => c.id === tech.disciplineId);
            const pos = categories.find(c => c.id === tech.positionId);
            return (
              <Link
                key={tech.id}
                to={`/technique/${tech.slug}`}
                className="flex gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-all group"
              >
                <div className="w-32 sm:w-40 aspect-video bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={tech.thumbnailUrl} alt={tech.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">{tech.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {disc?.icon} {disc?.name} • {pos?.name} • {'⭐'.repeat(tech.difficulty)}
                  </p>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">{tech.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {tech.views.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Bookmark className="w-3 h-3" /> {tech.bookmarks}</span>
                    <div className="flex gap-1">
                      {tech.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-800 text-gray-400 rounded">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
