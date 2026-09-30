export default function DataModelSection() {
  return (
    <section id="data-model" className="py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-2xl">🗄️</span> Data Model
      </h2>
      <p className="text-gray-400 mb-8">Core entities, relationships, and schema design for the application</p>

      {/* Entity Relationship Diagram */}
      <div className="mb-8 bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-white mb-4">📐 Entity Relationship Overview</h3>
        <div className="min-w-[600px]">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {/* User */}
            <div className="bg-gray-900/70 border border-blue-500/30 rounded-lg p-4">
              <h4 className="text-sm font-bold text-blue-300 mb-2 border-b border-gray-700 pb-2">User</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-yellow-400">🔑</span> id: UUID</p>
                <p><span className="text-blue-400">●</span> email: string</p>
                <p><span className="text-blue-400">●</span> password_hash: string</p>
                <p><span className="text-blue-400">●</span> name: string</p>
                <p><span className="text-blue-400">●</span> role: enum</p>
                <p><span className="text-blue-400">●</span> avatar_url: string?</p>
                <p><span className="text-blue-400">●</span> is_active: boolean</p>
                <p><span className="text-blue-400">●</span> created_at: datetime</p>
                <p><span className="text-blue-400">●</span> last_login: datetime</p>
              </div>
            </div>

            {/* Technique */}
            <div className="bg-gray-900/70 border border-green-500/30 rounded-lg p-4">
              <h4 className="text-sm font-bold text-green-300 mb-2 border-b border-gray-700 pb-2">Technique</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-yellow-400">🔑</span> id: UUID</p>
                <p><span className="text-green-400">●</span> name: string</p>
                <p><span className="text-green-400">●</span> slug: string (unique)</p>
                <p><span className="text-green-400">●</span> description: text</p>
                <p><span className="text-green-400">●</span> steps: json[]</p>
                <p><span className="text-green-400">●</span> difficulty: int (1-5)</p>
                <p><span className="text-green-400">●</span> belt_levels: enum[]</p>
                <p><span className="text-green-400">●</span> status: enum</p>
                <p><span className="text-blue-400">→</span> discipline_id: FK</p>
                <p><span className="text-blue-400">→</span> position_id: FK</p>
                <p><span className="text-blue-400">→</span> type_id: FK</p>
                <p><span className="text-blue-400">→</span> created_by: FK</p>
              </div>
            </div>

            {/* Media */}
            <div className="bg-gray-900/70 border border-purple-500/30 rounded-lg p-4">
              <h4 className="text-sm font-bold text-purple-300 mb-2 border-b border-gray-700 pb-2">Media</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-yellow-400">🔑</span> id: UUID</p>
                <p><span className="text-blue-400">→</span> technique_id: FK</p>
                <p><span className="text-purple-400">●</span> type: enum (video/gif)</p>
                <p><span className="text-purple-400">●</span> url: string</p>
                <p><span className="text-purple-400">●</span> thumbnail_url: string</p>
                <p><span className="text-purple-400">●</span> duration: int? (seconds)</p>
                <p><span className="text-purple-400">●</span> resolution: string?</p>
                <p><span className="text-purple-400">●</span> file_size: bigint</p>
                <p><span className="text-purple-400">●</span> format: string</p>
                <p><span className="text-purple-400">●</span> is_primary: boolean</p>
                <p><span className="text-purple-400">●</span> created_at: datetime</p>
              </div>
            </div>

            {/* Category */}
            <div className="bg-gray-900/70 border border-amber-500/30 rounded-lg p-4">
              <h4 className="text-sm font-bold text-amber-300 mb-2 border-b border-gray-700 pb-2">Category</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-yellow-400">🔑</span> id: UUID</p>
                <p><span className="text-amber-400">●</span> name: string</p>
                <p><span className="text-amber-400">●</span> slug: string</p>
                <p><span className="text-amber-400">●</span> type: enum</p>
                <p className="text-blue-400">→ parent_id: FK (self-ref)</p>
                <p><span className="text-amber-400">●</span> level: int</p>
                <p><span className="text-amber-400">●</span> order: int</p>
                <p><span className="text-amber-400">●</span> icon: string?</p>
                <p><span className="text-amber-400">●</span> is_active: boolean</p>
                <p className="mt-2 text-gray-500 italic">type: discipline | position | sub_position | technique_type</p>
              </div>
            </div>
          </div>

          {/* Additional Entities */}
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-4">
            <div className="bg-gray-900/70 border border-pink-500/30 rounded-lg p-4">
              <h4 className="text-sm font-bold text-pink-300 mb-2 border-b border-gray-700 pb-2">Bookmark</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-yellow-400">🔑</span> id: UUID</p>
                <p><span className="text-blue-400">→</span> user_id: FK</p>
                <p><span className="text-blue-400">→</span> technique_id: FK</p>
                <p><span className="text-blue-400">→</span> collection_id: FK?</p>
                <p><span className="text-pink-400">●</span> created_at: datetime</p>
              </div>
            </div>

            <div className="bg-gray-900/70 border border-cyan-500/30 rounded-lg p-4">
              <h4 className="text-sm font-bold text-cyan-300 mb-2 border-b border-gray-700 pb-2">Progress</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-yellow-400">🔑</span> id: UUID</p>
                <p><span className="text-blue-400">→</span> user_id: FK</p>
                <p><span className="text-blue-400">→</span> technique_id: FK</p>
                <p><span className="text-cyan-400">●</span> status: enum</p>
                <p><span className="text-cyan-400">●</span> notes: text?</p>
                <p><span className="text-cyan-400">●</span> updated_at: datetime</p>
              </div>
            </div>

            <div className="bg-gray-900/70 border border-orange-500/30 rounded-lg p-4">
              <h4 className="text-sm font-bold text-orange-300 mb-2 border-b border-gray-700 pb-2">Tag</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-yellow-400">🔑</span> id: UUID</p>
                <p><span className="text-orange-400">●</span> name: string</p>
                <p><span className="text-orange-400">●</span> slug: string</p>
                <p><span className="text-orange-400">●</span> color: string?</p>
                <p className="mt-2 text-gray-500 italic">M:N with Technique via technique_tags</p>
              </div>
            </div>

            <div className="bg-gray-900/70 border border-teal-500/30 rounded-lg p-4">
              <h4 className="text-sm font-bold text-teal-300 mb-2 border-b border-gray-700 pb-2">Collection</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p><span className="text-yellow-400">🔑</span> id: UUID</p>
                <p><span className="text-blue-400">→</span> user_id: FK</p>
                <p><span className="text-teal-400">●</span> name: string</p>
                <p><span className="text-teal-400">●</span> description: text?</p>
                <p><span className="text-teal-400">●</span> is_public: boolean</p>
                <p><span className="text-teal-400">●</span> created_at: datetime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Relationships */}
      <div className="mb-8 bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🔗 Key Relationships</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { rel: 'User → Role', type: '1:1', desc: 'Each user has exactly one role' },
            { rel: 'Category → Category', type: '1:N (self)', desc: 'Hierarchical parent-child (Discipline > Position > Sub-position)' },
            { rel: 'Technique → Category', type: 'N:1', desc: 'Each technique belongs to discipline, position, and type' },
            { rel: 'Technique → Media', type: '1:N', desc: 'A technique can have multiple media files (video + GIF versions)' },
            { rel: 'Technique → Tag', type: 'M:N', desc: 'Many-to-many via join table (technique_tags)' },
            { rel: 'Technique → Technique', type: 'M:N', desc: 'Related techniques (prerequisites, chains, alternatives)' },
            { rel: 'User → Technique (Bookmark)', type: 'M:N', desc: 'Users bookmark techniques into collections' },
            { rel: 'User → Technique (Progress)', type: '1:1', desc: 'Per-user progress tracking per technique' },
            { rel: 'Coach → Student', type: '1:N', desc: 'Coach manages multiple students' },
          ].map((item) => (
            <div key={item.rel} className="flex items-start gap-3 p-3 bg-gray-900/30 rounded-lg">
              <span className="px-2 py-0.5 bg-indigo-600/30 text-indigo-300 text-xs rounded font-mono">{item.type}</span>
              <div>
                <p className="text-sm text-white font-medium">{item.rel}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Enums */}
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">📋 Enumerations & Constants</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">User Roles</h4>
            <div className="flex flex-wrap gap-1">
              {['SUPER_ADMIN', 'CONTENT_ADMIN', 'COACH', 'STUDENT'].map(r => (
                <span key={r} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">{r}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Technique Status</h4>
            <div className="flex flex-wrap gap-1">
              {['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED'].map(r => (
                <span key={r} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">{r}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Media Type</h4>
            <div className="flex flex-wrap gap-1">
              {['VIDEO', 'GIF', 'IMAGE'].map(r => (
                <span key={r} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">{r}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Belt Levels</h4>
            <div className="flex flex-wrap gap-1">
              {['WHITE', 'BLUE', 'PURPLE', 'BROWN', 'BLACK'].map(r => (
                <span key={r} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">{r}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Progress Status</h4>
            <div className="flex flex-wrap gap-1">
              {['NOT_STARTED', 'LEARNING', 'PRACTICED', 'MASTERED'].map(r => (
                <span key={r} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">{r}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Category Types</h4>
            <div className="flex flex-wrap gap-1">
              {['DISCIPLINE', 'POSITION', 'SUB_POSITION', 'TECHNIQUE_TYPE'].map(r => (
                <span key={r} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">{r}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
