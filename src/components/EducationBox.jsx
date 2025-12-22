import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const EducationBox = ({ education }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-700/50' : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-400/20'}`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-rose-400' : 'text-rose-600'}`}>
            {education.program}
          </h3>
          <p className={`text-sm md:text-base font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {education.name}
          </p>
        </div>
        <span className={`text-sm md:text-base font-semibold px-3 py-1 rounded-lg ${isDark ? 'bg-slate-700/50 text-rose-300' : 'bg-rose-100 text-rose-700'}`}>
          {education.grade}
        </span>
      </div>
      <p className={`text-sm md:text-base ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>
        {education.duration}
      </p>
    </div>
  );
};

export default EducationBox;
