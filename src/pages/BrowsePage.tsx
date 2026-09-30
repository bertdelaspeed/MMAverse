import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTechniqueStore } from '../store/techniqueStore';
import { categories } from '../data/mockData';
import { Eye, Bookmark, Filter, X, ChevronRight } from 'lucide-react';

export default function BrowsePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { techniques } = useTechniqueStore();
  const [showFilters, setShowFilters] = useState(false);

  const selectedDiscipline = searchParams.get('discipline') || '';
  const selectedPosition = searchParams.get('position') || '';
  const selectedType = searchParams.get('type') || '';

  const disciplines = categories.filter(c => c.type === 'discipline');
  const positions = categories.filter(c => c.type === 'position' && (!selectedDiscipline || c.parentId === selectedDiscipline));
  const types = categories.filter(c => c.type === 'technique_type');

  const filteredTechniques = useMemo(() => {
    let results = techniques.filter(t => t.status === 'published');
    if (selectedDiscipline) results = results.filter(t => t.disciplineId === selectedDiscipline);
    if (selectedPosition) results = results.filter(t => t.positionId === selectedPosition);
    if (selectedType) results = results.filter(t => t.typeId === selectedType);
    return results;
  }, [techniques, selectedDiscipline, selectedPosition, selectedType]);

  const clearFilters = () => setSearchParams({});

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    // Clear dependent filters
    if (key === 'discipline') {
      params.delete('position');
    }
    setSearchParams(params);
  };

  const getDisciplineName = (id: string) => categories.find(c => c.id === id)?.name || '';
  const getPositionName = (id: string) => categories.find(c => c.id === id)?.name || '';
  const getTypeName = (id: string) => categories.find(c => c.id === id)?.name || '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Browse Techniques</h1>
        <p className="text-gray-400 mt-1">Explore our complete technique library by category</p>
      </div>

      {/* Breadcrumbs */}
      {(selectedDiscipline || selectedPosition || selectedType) && (
        <div className="flex items-center gap-2 text-sm mb-6 flex-wrap">
          <button onClick={clearFilters} className="text-gray-400 hover:text-white">All</button>
          {selectedDiscipline && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <button onClick={() => setFilter('discipline', '')} className="text-red-400 hover:text-red-300">
                {getDisciplineName(selectedDiscipline)}
              </button>
            </>
          )}
          {selectedPosition && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <button onClick={() => setFilter('position', '')} className="text-red-400 hover:text-red-300">
                {getPositionName(selectedPosition)}
              </button>
            </>
          )}
          {selectedType && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-gray-300">{getTypeName(selectedType)}</span>
            </>
          )}
          <button onClick={clearFilters} className="ml-2 text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1">
            <X className="w-3 h-3" /> Clear
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filters
              </h3>
              <button onClick={() => setShowFilters(false)} className="lg:hidden text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Discipline Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Discipline</h4>
              <div className="space-y-1">
                <button
                  onClick={() => setFilter('discipline', '')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !selectedDiscipline ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  All Disciplines
                </button>
                {disciplines.map(disc => (
                  <button
                    key={disc.id}
                    onClick={() => setFilter('discipline', disc.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                      selectedDiscipline === disc.id ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <span>{disc.icon}</span>
                    <span>{disc.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Position Filter */}
            {selectedDiscipline && positions.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Position</h4>
                <div className="space-y-1">
                  <button
                    onClick={() => setFilter('position', '')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedPosition ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    All Positions
                  </button>
                  {positions.map(pos => (
                    <button
                      key={pos.id}
                      onClick={() => setFilter('position', pos.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedPosition === pos.id ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {pos.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Type Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Technique Type</h4>
              <div className="space-y-1">
                <button
                  onClick={() => setFilter('type', '')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !selectedType ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  All Types
                </button>
                {types.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setFilter('type', type.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedType === type.id ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                <span className="text-white font-bold">{filteredTechniques.length}</span> techniques found
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden mb-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-700"
          >
            <Filter className="w-4 h-4" /> Filters
          </button>

          {/* Results Grid */}
          {filteredTechniques.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2">No techniques found</h3>
              <p className="text-gray-400">Try adjusting your filters</p>
              <button onClick={clearFilters} className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTechniques.map((tech) => (
                <Link
                  key={tech.id}
                  to={`/technique/${tech.slug}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-900/20"
                >
                  <div className="relative aspect-video bg-gray-800">
                    <img
                      src={tech.thumbnailUrl}
                      alt={tech.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1">
                      <span className="px-2 py-0.5 bg-red-600/90 text-white text-xs rounded font-medium">
                        {tech.mediaType === 'video' ? '▶ Video' : '🎞 GIF'}
                      </span>
                      <span className="px-2 py-0.5 bg-gray-800/90 text-gray-300 text-xs rounded">
                        {'⭐'.repeat(tech.difficulty)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-sm group-hover:text-red-400 transition-colors line-clamp-2">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {getDisciplineName(tech.disciplineId)} • {getPositionName(tech.positionId)}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {tech.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bookmark className="w-3 h-3" />
                        {tech.bookmarks}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {tech.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
