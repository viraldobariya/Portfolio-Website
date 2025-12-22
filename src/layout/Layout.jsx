import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/ThemeContext';

const Layout = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-black text-gray-100' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900'}`}>
      <Header />
      <main className={`${isDark ? '' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
