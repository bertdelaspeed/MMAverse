import { categories } from '../../data/mockData';
import { FolderTree, Plus } from 'lucide-react';

export default function AdminCategories() {
  const disciplines = categories.filter(c => c.type === 'discipline');

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-white">Manage Categories</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium">
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      {/* Disciplines with their children */}
      <div className="space-y-6">
        {disciplines.map(disc => {
          const positions = categories.filter(c => c.parentId === disc.id);
          const techniqueTypes = categories.filter(c => c.type === 'technique_type');
          
          return (
            <div key={disc.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{disc.icon}</span>
                <div>
                  <h3 className="font-bold text-white">{disc.name}</h3>
                  <p className="text-xs text-gray-500">Discipline • {positions.length} positions</p>
                </div>
              </div>
              
              {positions.length > 0 && (
                <div className="ml-8 space-y-2">
                  {positions.map(pos => {
                    const subPositions = categories.filter(c => c.parentId === pos.id);
                    return (
                      <div key={pos.id} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-300">{pos.name}</p>
                            <p className="text-xs text-gray-500">
                              Position • {subPositions.length} sub-positions
                            </p>
                          </div>
                          <span className="text-xs text-gray-500">Order: {pos.order}</span>
                        </div>
                        {subPositions.length > 0 && (
                          <div className="mt-2 ml-4 space-y-1">
                            {subPositions.map(sub => (
                              <div key={sub.id} className="flex items-center justify-between py-1 text-xs text-gray-400">
                                <span>└ {sub.name}</span>
                                <span className="text-gray-600">Order: {sub.order}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Technique Types */}
      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <FolderTree className="w-5 h-5 text-gray-400" />
          <div>
            <h3 className="font-bold text-white">Technique Types</h3>
            <p className="text-xs text-gray-500">Global technique type tags</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.filter(c => c.type === 'technique_type').map(type => (
            <span key={type.id} className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700">
              {type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
