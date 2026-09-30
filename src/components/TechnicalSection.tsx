export default function TechnicalSection() {
  return (
    <section id="technical" className="py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-2xl">🏗️</span> Technical Architecture
      </h2>
      <p className="text-gray-400 mb-8">Recommended technology stack, infrastructure, and architectural patterns</p>

      {/* Tech Stack */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-cyan-400">01</span> Recommended Technology Stack
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              category: 'Frontend',
              items: [
                { name: 'React 18+ / Next.js 14', reason: 'Component-based UI, SSR for SEO, App Router' },
                { name: 'TypeScript', reason: 'Type safety across the entire codebase' },
                { name: 'Tailwind CSS', reason: 'Utility-first CSS for rapid, responsive styling' },
                { name: 'Zustand / React Query', reason: 'State management and server-state caching' },
                { name: 'Video.js / Plyr', reason: 'Accessible, customizable video player' },
              ],
            },
            {
              category: 'Backend',
              items: [
                { name: 'Node.js + Express / NestJS', reason: 'JavaScript ecosystem, scalable, well-documented' },
                { name: 'PostgreSQL', reason: 'Relational DB with JSON support, robust for hierarchical data' },
                { name: 'Prisma ORM', reason: 'Type-safe database access, migrations, great DX' },
                { name: 'Redis', reason: 'Caching layer, session store, rate limiting' },
                { name: 'JWT + Refresh Tokens', reason: 'Stateless auth with secure token rotation' },
              ],
            },
            {
              category: 'Media & Storage',
              items: [
                { name: 'AWS S3 / Cloudflare R2', reason: 'Scalable object storage for videos/GIFs' },
                { name: 'FFmpeg (via worker)', reason: 'Video transcoding, thumbnail generation, GIF conversion' },
                { name: 'Cloudflare CDN', reason: 'Global content delivery for fast video streaming' },
                { name: 'Mux / Cloudflare Stream', reason: 'Adaptive bitrate streaming (optional upgrade)' },
                { name: 'Sharp / ImageMagick', reason: 'Image processing for thumbnails' },
              ],
            },
            {
              category: 'Infrastructure',
              items: [
                { name: 'Docker + Docker Compose', reason: 'Containerized development and deployment' },
                { name: 'Vercel / Railway / Fly.io', reason: 'Easy deployment with auto-scaling' },
                { name: 'GitHub Actions', reason: 'CI/CD pipeline for automated testing and deployment' },
                { name: 'Sentry', reason: 'Error tracking and performance monitoring' },
                { name: 'PostHog / Plausible', reason: 'Privacy-friendly analytics' },
              ],
            },
          ].map((stack) => (
            <div key={stack.category} className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-5">
              <h4 className="font-semibold text-cyan-300 mb-3 text-sm uppercase tracking-wide">{stack.category}</h4>
              <div className="space-y-3">
                {stack.items.map((item) => (
                  <div key={item.name}>
                    <p className="text-sm text-white font-medium">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="mb-8 bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">📐 System Architecture</h3>
        <div className="bg-gray-900/70 rounded-lg p-6 border border-gray-700/30 overflow-x-auto">
          <div className="min-w-[500px] space-y-4">
            {/* Client Layer */}
            <div className="border border-blue-500/30 rounded-lg p-4">
              <p className="text-xs text-blue-400 font-semibold mb-2">CLIENT LAYER</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-blue-900/30 text-blue-300 text-xs rounded-lg border border-blue-500/20">Web App (React SPA)</span>
                <span className="px-3 py-1.5 bg-blue-900/30 text-blue-300 text-xs rounded-lg border border-blue-500/20">Admin Dashboard</span>
                <span className="px-3 py-1.5 bg-blue-900/30 text-blue-300 text-xs rounded-lg border border-blue-500/20">PWA (Offline Support)</span>
                <span className="px-3 py-1.5 bg-blue-900/30 text-blue-300 text-xs rounded-lg border border-blue-500/20">Mobile Browser</span>
              </div>
            </div>
            <div className="text-center text-gray-500">↕ HTTPS / WebSocket</div>
            {/* API Layer */}
            <div className="border border-green-500/30 rounded-lg p-4">
              <p className="text-xs text-green-400 font-semibold mb-2">API LAYER</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-green-900/30 text-green-300 text-xs rounded-lg border border-green-500/20">REST API (Express/NestJS)</span>
                <span className="px-3 py-1.5 bg-green-900/30 text-green-300 text-xs rounded-lg border border-green-500/20">Auth Middleware (JWT)</span>
                <span className="px-3 py-1.5 bg-green-900/30 text-green-300 text-xs rounded-lg border border-green-500/20">Rate Limiter</span>
                <span className="px-3 py-1.5 bg-green-900/30 text-green-300 text-xs rounded-lg border border-green-500/20">File Upload Handler</span>
              </div>
            </div>
            <div className="text-center text-gray-500">↕ Internal Services</div>
            {/* Service Layer */}
            <div className="border border-purple-500/30 rounded-lg p-4">
              <p className="text-xs text-purple-400 font-semibold mb-2">SERVICE LAYER</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-purple-900/30 text-purple-300 text-xs rounded-lg border border-purple-500/20">Technique Service</span>
                <span className="px-3 py-1.5 bg-purple-900/30 text-purple-300 text-xs rounded-lg border border-purple-500/20">User Service</span>
                <span className="px-3 py-1.5 bg-purple-900/30 text-purple-300 text-xs rounded-lg border border-purple-500/20">Media Processing Service</span>
                <span className="px-3 py-1.5 bg-purple-900/30 text-purple-300 text-xs rounded-lg border border-purple-500/20">Search Service</span>
                <span className="px-3 py-1.5 bg-purple-900/30 text-purple-300 text-xs rounded-lg border border-purple-500/20">Notification Service</span>
              </div>
            </div>
            <div className="text-center text-gray-500">↕ Data Access</div>
            {/* Data Layer */}
            <div className="border border-amber-500/30 rounded-lg p-4">
              <p className="text-xs text-amber-400 font-semibold mb-2">DATA LAYER</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-amber-900/30 text-amber-300 text-xs rounded-lg border border-amber-500/20">PostgreSQL (Primary DB)</span>
                <span className="px-3 py-1.5 bg-amber-900/30 text-amber-300 text-xs rounded-lg border border-amber-500/20">Redis (Cache + Sessions)</span>
                <span className="px-3 py-1.5 bg-amber-900/30 text-amber-300 text-xs rounded-lg border border-amber-500/20">S3/R2 (Media Storage)</span>
                <span className="px-3 py-1.5 bg-amber-900/30 text-amber-300 text-xs rounded-lg border border-amber-500/20">CDN (Cloudflare)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Design */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-cyan-400">02</span> API Endpoints (Key Routes)
        </h3>
        <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">Method</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">Endpoint</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">Description</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">Auth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { method: 'GET', endpoint: '/api/techniques', desc: 'List techniques (paginated, filterable)', auth: 'Public' },
                  { method: 'GET', endpoint: '/api/techniques/:slug', desc: 'Get technique detail by slug', auth: 'Public' },
                  { method: 'POST', endpoint: '/api/techniques', desc: 'Create new technique', auth: 'Admin' },
                  { method: 'PUT', endpoint: '/api/techniques/:id', desc: 'Update technique', auth: 'Admin' },
                  { method: 'DELETE', endpoint: '/api/techniques/:id', desc: 'Delete technique', auth: 'Admin' },
                  { method: 'POST', endpoint: '/api/media/upload', desc: 'Upload video/GIF file', auth: 'Admin' },
                  { method: 'GET', endpoint: '/api/categories', desc: 'Get category tree', auth: 'Public' },
                  { method: 'GET', endpoint: '/api/search', desc: 'Full-text search techniques', auth: 'Public' },
                  { method: 'POST', endpoint: '/api/bookmarks', desc: 'Bookmark a technique', auth: 'User' },
                  { method: 'GET', endpoint: '/api/users/me/progress', desc: 'Get user learning progress', auth: 'User' },
                  { method: 'POST', endpoint: '/api/auth/login', desc: 'Authenticate user', auth: 'None' },
                  { method: 'POST', endpoint: '/api/auth/register', desc: 'Register new user', auth: 'None' },
                ].map((route, i) => (
                  <tr key={i} className="hover:bg-gray-800/30">
                    <td className="px-4 py-2">
                      <span className={`px-2 py-0.5 text-xs font-mono rounded ${
                        route.method === 'GET' ? 'bg-green-900/30 text-green-300' :
                        route.method === 'POST' ? 'bg-blue-900/30 text-blue-300' :
                        route.method === 'PUT' ? 'bg-amber-900/30 text-amber-300' :
                        'bg-red-900/30 text-red-300'
                      }`}>{route.method}</span>
                    </td>
                    <td className="px-4 py-2 font-mono text-xs text-gray-300">{route.endpoint}</td>
                    <td className="px-4 py-2 text-xs text-gray-400">{route.desc}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-0.5 text-xs rounded ${
                        route.auth === 'Admin' ? 'bg-purple-900/30 text-purple-300' :
                        route.auth === 'User' ? 'bg-blue-900/30 text-blue-300' :
                        'bg-gray-700/30 text-gray-400'
                      }`}>{route.auth}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Video/GIF Conversion Flow */}
      <div className="mb-8 bg-gradient-to-br from-cyan-900/20 to-gray-900/50 border border-cyan-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-cyan-300 mb-4">🔄 Video ↔ GIF Conversion Pipeline</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 text-center">
          {[
            { step: '1', title: 'Upload', desc: 'Admin uploads original video file' },
            { step: '2', title: 'Decision', desc: 'Choose: keep as video, convert to GIF, or both' },
            { step: '3', title: 'Processing', desc: 'FFmpeg worker processes the file (trim, resize, encode)' },
            { step: '4', title: 'Storage', desc: 'Output saved to S3/R2 with CDN distribution' },
            { step: '5', title: 'Metadata', desc: 'Media record created and linked to technique' },
          ].map((item) => (
            <div key={item.step} className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
              <div className="w-7 h-7 bg-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
                {item.step}
              </div>
              <h4 className="font-medium text-white text-xs">{item.title}</h4>
              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-gray-900/30 rounded-lg">
          <p className="text-xs text-gray-400">
            <span className="text-cyan-300 font-medium">Conversion Settings:</span> GIF output is optimized for web 
            (max 480px width, 15fps, 256 colors palette). Video is transcoded to H.264 MP4 with adaptive bitrate 
            variants. Admin can configure these defaults in platform settings.
          </p>
        </div>
      </div>

      {/* Security */}
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🔒 Security Considerations</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'JWT with short-lived access tokens + refresh token rotation',
            'Role-based middleware on all API routes',
            'Input validation with Zod schemas on all endpoints',
            'Rate limiting per IP and per user (prevent abuse)',
            'File upload validation (type, size, virus scan)',
            'Signed URLs for media access (prevent hotlinking)',
            'CORS configuration for frontend domains only',
            'SQL injection prevention via Prisma parameterized queries',
            'XSS prevention via React default escaping + CSP headers',
            'Password hashing with bcrypt (cost factor 12+)',
            'HTTPS enforced on all connections',
            'Audit logging for admin actions',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-2">
              <span className="text-red-400 text-xs mt-0.5">🛡</span>
              <span className="text-sm text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
