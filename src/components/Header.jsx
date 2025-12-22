import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useContext } from 'react';
import { menus } from '../data/menuData';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`sticky top-0 z-50 ${isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-gray-200'} backdrop-blur-md border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent hover:scale-105 transition-transform`}>
          VD
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.href}
              className={`font-medium transition-colors hover:text-rose-500 ${isDark ? 'text-gray-300 hover:text-rose-400' : 'text-gray-700 hover:text-rose-500'}`}
            >
              {menu.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-slate-800 text-gray-300 hover:bg-slate-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className={`md:hidden border-t ${isDark ? 'border-slate-800 bg-slate-800/50' : 'border-gray-200 bg-gray-50'} backdrop-blur-md`}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {menus.map((menu, index) => (
              <Link
                key={index}
                to={menu.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium transition-colors hover:text-rose-500 ${isDark ? 'text-gray-300 hover:text-rose-400' : 'text-gray-700 hover:text-rose-500'}`}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
