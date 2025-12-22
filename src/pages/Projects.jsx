import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useGistData } from '../hooks/useGistData';
import ProjectBox from '../components/ProjectBox';

const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const { data: projectsData, loading: loadingProjects } = useGistData('projects.json');

  if (loadingProjects) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'}`}>
        <div className={`text-3xl md:text-4xl font-bold animate-pulse ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Loading...
        </div>
      </div>
    );
  }

  const projects = projectsData?.projects || [];

  return (
    <div className={`${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'} pb-12 md:pb-20`}>
      {/* Header */}
      <section className={`${isDark ? '' : ''} pt-16 md:pt-24 pb-12 md:pb-20 px-6 md:px-8 lg:px-12`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent tracking-tight mb-6">
            Projects
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I've built many projects across different technologies over the years. These are the ones that I'm most proud of.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <section className="px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {projects.map((project, index) => (
                <ProjectBox key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center py-20">
          <p className={`text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            No projects found
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
