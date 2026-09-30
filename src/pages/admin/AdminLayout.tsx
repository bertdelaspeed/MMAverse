import { Navigate, Link, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Shield, LayoutDashboard, Film, Users, FolderTree, Plus, Settings } from 'lucide-react';

export default function AdminLayout() {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated || (user?.role !== 'super_admin' && user?.role !== 'content_admin')) {
    return <Navigate to="/login" />;
  }

  const navItems = [
    { path: '/admin', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { path: '/admin/techniques', icon: <Film className="w-5 h-5" />, label: 'Techniques' },
    { path: '/admin/categories', icon: <FolderTree className="w-5 h-5" />, label: 'Categories' },
    { path: '/admin/users', icon: <Users className="w-5 h-5" />, label: 'Users' },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Admin Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-600/20 border border-amber-500/30 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-sm text-gray-400">Manage your Champ Squad platform</p>
          </div>
        </div>
        <Link
          to="/admin/techniques/new"
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" /> New Technique
        </Link>
      </div>

      {/* Admin Nav */}
      <nav className="flex gap-1 mb-8 overflow-x-auto pb-2">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              isActive(item.path)
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}
