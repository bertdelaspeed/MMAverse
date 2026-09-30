export default function HeroSection() {
  return (
    <section id="hero" className="py-12 sm:py-20">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent rounded-3xl -z-10" />
        
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            Specification Document v1.0
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            MMA Techniques
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Dictionary
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            A comprehensive, mobile-responsive web application serving as a searchable video dictionary 
            for mixed martial arts techniques. Featuring video/GIF playback, hierarchical categorization, 
            and a full-featured admin back-office for content and user management.
          </p>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg border border-gray-700/50">
              <span className="text-green-400">✓</span>
              <span className="text-sm text-gray-300">Mobile Responsive</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg border border-gray-700/50">
              <span className="text-green-400">✓</span>
              <span className="text-sm text-gray-300">Video & GIF Support</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg border border-gray-700/50">
              <span className="text-green-400">✓</span>
              <span className="text-sm text-gray-300">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg border border-gray-700/50">
              <span className="text-green-400">✓</span>
              <span className="text-sm text-gray-300">Role-Based Access</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Disciplines', value: '5+', icon: '🥋' },
            { label: 'Positions', value: '50+', icon: '📍' },
            { label: 'Techniques', value: '500+', icon: '⚡' },
            { label: 'User Roles', value: '4', icon: '👤' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
