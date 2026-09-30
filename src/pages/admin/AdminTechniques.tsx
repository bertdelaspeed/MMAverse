import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTechniqueStore } from '../../store/techniqueStore';
import { categories } from '../../data/mockData';
import { Plus, Edit, Trash2, Eye, Search, Film } from 'lucide-react';

export default function AdminTechniques() {
  const { techniques, deleteTechnique } = useTechniqueStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filtered = techniques.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || t.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this technique?')) {
      deleteTechnique(id);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-white">Manage Techniques</h2>
        <Link
          to="/admin/techniques/new"
          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium"
        >
          <Plus className="w-4 h-4" /> Add Technique
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search techniques..."
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-red-500"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800/50">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Technique</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium hidden sm:table-cell">Discipline</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium hidden md:table-cell">Type</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium hidden sm:table-cell">Views</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filtered.map(tech => {
                const disc = categories.find(c => c.id === tech.disciplineId);
                const type = categories.find(c => c.id === tech.typeId);
                return (
                  <tr key={tech.id} className="hover:bg-gray-800/30">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-8 bg-gray-800 rounded overflow-hidden flex-shrink-0 hidden sm:block">
                          <img src={tech.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-white font-medium line-clamp-1">{tech.name}</p>
                          <p className="text-xs text-gray-500">{tech.createdAt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-400 hidden sm:table-cell">{disc?.icon} {disc?.name}</td>
                    <td className="py-3 px-4 text-gray-400 hidden md:table-cell">{type?.name}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-0.5 text-xs rounded font-medium ${
                        tech.status === 'published' ? 'bg-green-600/20 text-green-400' : 'bg-gray-700 text-gray-400'
                      }`}>
                        {tech.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-gray-400 hidden sm:table-cell">{tech.views.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          to={`/technique/${tech.slug}`}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button className="p-1.5 text-gray-400 hover:text-amber-400 hover:bg-gray-700 rounded" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(tech.id)}
                          className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Film className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">No techniques found</p>
          </div>
        )}
      </div>
    </div>
  );
}
