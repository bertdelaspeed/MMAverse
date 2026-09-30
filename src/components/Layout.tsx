import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-gray-800 bg-gray-950 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">CS</span>
              </div>
              <span className="text-gray-400 text-sm">Champ Squad - mmaverse</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Champ Squad. Your ultimate MMA technique reference.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
