import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SkillBox = ({ category, items }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700/50 hover:border-slate-600/80 hover:shadow-lg hover:shadow-rose-500/10' : 'bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-400/10'}`}>
      <h3 className={`text-lg md:text-xl font-bold mb-4 ${isDark ? 'text-rose-400' : 'text-rose-600'}`}>
        {category}
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-3 md:px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all ${isDark ? 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-rose-400' : 'bg-gray-200 text-gray-700 hover:bg-rose-100 hover:text-rose-600'}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
