import { Link } from 'react-router-dom';
import { useTechniqueStore } from '../store/techniqueStore';
import { categories } from '../data/mockData';
import { Play, Bookmark, Eye, ArrowRight, Zap, Target, Shield } from 'lucide-react';

export default function HomePage() {
  const { techniques } = useTechniqueStore();
  const publishedTechniques = techniques.filter(t => t.status === 'published');
  const disciplines = categories.filter(c => c.type === 'discipline');
  const recentTechniques = [...publishedTechniques].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 4);
  const popularTechniques = [...publishedTechniques].sort((a, b) => b.views - a.views).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtMzBWMkgydjJoMzR6TTIgNTRoMnYtMkgydjJ6bTU4LTMwdjJINDJ2LTJoMTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-sm mb-6">
              <Zap className="w-4 h-4" />
              <span>The Ultimate MMA Technique Reference</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Master Every
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
                Technique
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your comprehensive video dictionary for Brazilian Jiu-Jitsu, Muay Thai, Wrestling, Judo, and MMA. 
              Search, learn, and track your progress across hundreds of techniques.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/browse"
                className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg font-bold transition-all shadow-lg shadow-red-900/50 hover:shadow-red-600/50 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Start Learning
              </Link>
              <Link
                to="/search"
                className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-lg font-medium transition-all border border-gray-700 flex items-center justify-center gap-2"
              >
                Search Techniques
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Techniques', value: publishedTechniques.length.toString(), icon: '🥋' },
              { label: 'Disciplines', value: disciplines.length.toString(), icon: '🏆' },
              { label: 'Video Hours', value: '50+', icon: '📹' },
              { label: 'Active Users', value: '1.2K+', icon: '👥' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Browse by Discipline</h2>
            <p className="text-gray-400 mt-1">Choose your martial art and start exploring</p>
          </div>
          <Link to="/browse" className="hidden sm:flex items-center gap-1 text-red-400 hover:text-red-300 text-sm font-medium">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {disciplines.map((disc) => {
            const count = publishedTechniques.filter(t => t.disciplineId === disc.id).length;
            return (
              <Link
                key={disc.id}
                to={`/browse?discipline=${disc.id}`}
                className="group bg-gray-900 border border-gray-800 hover:border-red-500/50 rounded-xl p-5 text-center transition-all hover:shadow-lg hover:shadow-red-900/20"
              >
                <div className="text-4xl mb-3">{disc.icon}</div>
                <h3 className="font-bold text-white text-sm group-hover:text-red-400 transition-colors">{disc.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{count} techniques</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">Why Champ Squad?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Play className="w-8 h-8 text-red-400" />,
                title: 'Video & GIF Library',
                desc: 'Watch high-quality technique demonstrations in video or GIF format. Control playback speed for detailed study.'
              },
              {
                icon: <Target className="w-8 h-8 text-amber-400" />,
                title: 'Smart Organization',
                desc: 'Hierarchical categories from discipline to position to technique type. Find exactly what you need in seconds.'
              },
              {
                icon: <Bookmark className="w-8 h-8 text-blue-400" />,
                title: 'Track Your Progress',
                desc: 'Bookmark techniques, track your learning journey, and add personal notes to remember key details.'
              },
              {
                icon: <Shield className="w-8 h-8 text-green-400" />,
                title: 'Expert Curated',
                desc: 'All content is reviewed and organized by experienced coaches and practitioners.'
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-400" />,
                title: 'Mobile First',
                desc: 'Fully responsive design that works perfectly on your phone at the gym or on desktop at home.'
              },
              {
                icon: <Eye className="w-8 h-8 text-cyan-400" />,
                title: 'Step-by-Step',
                desc: 'Each technique includes detailed step-by-step instructions, tips, and common mistakes to avoid.'
              },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Techniques */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Recently Added</h2>
            <p className="text-gray-400 mt-1">Latest techniques added to the library</p>
          </div>
          <Link to="/browse" className="hidden sm:flex items-center gap-1 text-red-400 hover:text-red-300 text-sm font-medium">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentTechniques.map((tech) => (
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
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white text-sm group-hover:text-red-400 transition-colors line-clamp-2">
                  {tech.name}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {tech.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-3 h-3" />
                    {tech.bookmarks}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Techniques */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Most Popular</h2>
            <p className="text-gray-400 mt-1">Most viewed techniques by the community</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularTechniques.map((tech, index) => (
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
                <div className="absolute top-2 left-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white text-sm group-hover:text-red-400 transition-colors line-clamp-2">
                  {tech.name}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {tech.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-3 h-3" />
                    {tech.bookmarks}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-red-900/30 to-gray-900 border border-red-500/20 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Level Up Your Game?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Join thousands of martial artists using Champ Squad to study, learn, and master techniques.
            Create your free account today.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg font-bold transition-all shadow-lg shadow-red-900/50"
          >
            Create Free Account
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
