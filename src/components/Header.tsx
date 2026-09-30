import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Menu, X, Search, Bookmark, User, Shield, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:shadow-red-600/50 transition-shadow">
              <span className="text-white font-black text-lg">CS</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight">Champ Squad</div>
              <div className="text-red-400 text-xs font-medium -mt-0.5">mmaverse</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/browse') ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Browse
            </Link>
            <Link
              to="/search"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/search') ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Search className="w-4 h-4 inline mr-1" />
              Search
            </Link>
            {isAuthenticated && (
              <Link
                to="/bookmarks"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/bookmarks') ? 'bg-red-600/20 text-red-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Bookmark className="w-4 h-4 inline mr-1" />
                Saved
              </Link>
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                {(user?.role === 'super_admin' || user?.role === 'content_admin') && (
                  <Link
                    to="/admin"
                    className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-amber-600/20 text-amber-400 rounded-lg text-sm font-medium hover:bg-amber-600/30 transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    Admin
                  </Link>
                )}
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg text-sm text-gray-300 hover:bg-gray-700 transition-colors">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">{user?.name?.split(' ')[0]}</span>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/bookmarks"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white md:hidden"
                    >
                      Saved Techniques
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-red-900/30"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950">
          <nav className="px-4 py-4 space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/browse"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Browse
            </Link>
            <Link
              to="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Search
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  to="/bookmarks"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Saved Techniques
                </Link>
                {(user?.role === 'super_admin' || user?.role === 'content_admin') && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm font-medium text-amber-400 hover:bg-gray-800"
                  >
                    Admin Dashboard
                  </Link>
                )}
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
