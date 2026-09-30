import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTechniqueStore } from '../../store/techniqueStore';
import { categories } from '../../data/mockData';
import { Upload, Film, Image, ArrowLeft } from 'lucide-react';

export default function AdminNewTechnique() {
  const navigate = useNavigate();
  const { addTechnique } = useTechniqueStore();
  const [mediaFormat, setMediaFormat] = useState<'video' | 'gif'>('video');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    disciplineId: '',
    positionId: '',
    typeId: '',
    difficulty: 1,
    tags: '',
    steps: [''],
    tips: [''],
    commonMistakes: [''],
  });

  const disciplines = categories.filter(c => c.type === 'discipline');
  const positions = categories.filter(c => c.type === 'position' && c.parentId === formData.disciplineId);
  const types = categories.filter(c => c.type === 'technique_type');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTechnique = {
      id: Date.now().toString(),
      name: formData.name,
      slug: formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      description: formData.description,
      steps: formData.steps.filter(s => s.trim()),
      difficulty: formData.difficulty as 1 | 2 | 3 | 4 | 5,
      beltLevels: ['white', 'blue'],
      disciplineId: formData.disciplineId,
      positionId: formData.positionId,
      typeId: formData.typeId,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      mediaUrl: 'https://example.com/videos/new.mp4',
      mediaType: mediaFormat,
      thumbnailUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&h=300&fit=crop',
      tips: formData.tips.filter(t => t.trim()),
      commonMistakes: formData.commonMistakes.filter(m => m.trim()),
      relatedTechniques: [],
      status: 'draft' as const,
      createdAt: new Date().toISOString().split('T')[0],
      views: 0,
      bookmarks: 0,
    };
    addTechnique(newTechnique);
    navigate('/admin/techniques');
  };

  return (
    <div className="max-w-3xl">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <h2 className="text-xl font-bold text-white mb-6">Add New Technique</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Media Upload Section */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-red-400" /> Media Upload
          </h3>
          
          {/* Format Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => setMediaFormat('video')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mediaFormat === 'video' ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400 border border-gray-700'
              }`}
            >
              <Film className="w-4 h-4" /> Video
            </button>
            <button
              type="button"
              onClick={() => setMediaFormat('gif')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mediaFormat === 'gif' ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400 border border-gray-700'
              }`}
            >
              <Image className="w-4 h-4" /> Convert to GIF
            </button>
          </div>

          {/* Upload Area */}
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-red-500/50 transition-colors cursor-pointer">
            <Upload className="w-10 h-10 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">Drag & drop your {mediaFormat} file here</p>
            <p className="text-gray-500 text-xs mt-1">or click to browse (MP4, WebM, GIF, MOV)</p>
            <p className="text-gray-600 text-xs mt-3">Max file size: 500MB</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="font-bold text-white mb-4">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Technique Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Upa Escape from Mount"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the technique..."
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 h-24 resize-none"
                required
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Discipline *</label>
                <select
                  value={formData.disciplineId}
                  onChange={(e) => setFormData({ ...formData, disciplineId: e.target.value, positionId: '' })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                  required
                >
                  <option value="">Select...</option>
                  {disciplines.map(d => (
                    <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Position *</label>
                <select
                  value={formData.positionId}
                  onChange={(e) => setFormData({ ...formData, positionId: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                  required
                  disabled={!formData.disciplineId}
                >
                  <option value="">Select...</option>
                  {positions.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Type *</label>
                <select
                  value={formData.typeId}
                  onChange={(e) => setFormData({ ...formData, typeId: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                  required
                >
                  <option value="">Select...</option>
                  {types.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Difficulty (1-5)</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(d => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setFormData({ ...formData, difficulty: d })}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.difficulty === d ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400 border border-gray-700'
                      }`}
                    >
                      {'⭐'.repeat(d)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="gi, no-gi, fundamental"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="font-bold text-white mb-4">Steps</h3>
          <div className="space-y-2">
            {formData.steps.map((step, i) => (
              <div key={i} className="flex gap-2">
                <span className="w-6 h-9 flex items-center justify-center text-xs text-gray-500">{i + 1}.</span>
                <input
                  type="text"
                  value={step}
                  onChange={(e) => {
                    const newSteps = [...formData.steps];
                    newSteps[i] = e.target.value;
                    setFormData({ ...formData, steps: newSteps });
                  }}
                  placeholder={`Step ${i + 1}`}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setFormData({ ...formData, steps: [...formData.steps, ''] })}
              className="text-sm text-red-400 hover:text-red-300 ml-8"
            >
              + Add Step
            </button>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/techniques')}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-medium transition-colors border border-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
