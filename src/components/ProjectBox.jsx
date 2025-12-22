import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Github, ExternalLink } from 'lucide-react';

const ProjectBox = ({ project }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`w-full transition-all duration-300 group`}>
      <div className={`h-full p-6 md:p-8 rounded-xl transition-all duration-300 flex flex-col md:flex-row md:items-center md:gap-8 ${isDark ? 'bg-slate-800/60 border border-slate-700/60 hover:border-rose-500/40 hover:shadow-lg hover:shadow-rose-500/15' : 'bg-white border border-gray-200 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-400/15'}`}>
        
        {/* Project Header & Description */}
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className={`text-2xl md:text-3xl font-bold mb-3 group-hover:text-rose-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {project.name}
          </h3>
          <p className={`text-sm md:text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags && project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1.5 text-xs md:text-sm rounded-md font-medium transition-colors ${isDark ? 'bg-slate-700/70 text-rose-300' : 'bg-rose-100/80 text-rose-700'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white border border-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300'}`}
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all text-white ${isDark ? 'bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 border border-rose-500/30' : 'bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 border border-rose-400/30'}`}
              >
                <ExternalLink size={18} />
                Visit Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
