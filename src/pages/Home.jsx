import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useGistData } from '../hooks/useGistData';
import { Download, ExternalLink, Code2, Trophy } from 'lucide-react';
import SkillBox from '../components/SkillBox';
import EducationBox from '../components/EducationBox';
import ProjectBox from '../components/ProjectBox';
import { leetcodeContext } from '../context/LeetcodeContext';

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  const { data: personalData, loading: loadingPersonal } = useGistData('personal-info.json');
  const { data: educationData, loading: loadingEducation } = useGistData('education.json');
  const { data: skillsData, loading: loadingSkills } = useGistData('skills.json');
  const { data: showcaseData, loading: loadingShowcase } = useGistData('showcase-projects.json');
  const { data: resumeData, loading: loadingResume } = useGistData('resume.json');
  const { data: experienceData, loading: loadingExperience } = useGistData('experience.json');
  const { loading: loadingLeetcode, leetcodeData } = useContext(leetcodeContext);

  const isLoading = loadingPersonal || loadingEducation || loadingSkills || loadingShowcase || loadingResume || loadingExperience;

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'}`}>
        <div className={`text-3xl md:text-4xl font-bold animate-pulse ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Loading...
        </div>
      </div>
    );
  }

  const featuredProjects = showcaseData?.projects || [];
  const experience = experienceData?.experience || [];

  return (
    <div className={`${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'} text-gray-100 pb-12 md:pb-20`}>
      {/* Hero Section */}
      <section className={`${isDark ? '' : ''} pt-16 md:pt-24 pb-12 md:pb-20 px-6 md:px-8 lg:px-12`}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
            Hello, I'm
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent tracking-tight mb-6">
            {personalData?.name || 'Viral Dobariya'}
          </h1>
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {personalData?.title || 'Full Stack Developer & DevOps Enthusiast'}
          </h2>
          {personalData?.shortBio && (
            <p className={`text-xl md:text-2xl font-semibold mb-8 ${isDark ? 'text-rose-400' : 'text-rose-600'}`}>
              {personalData?.shortBio}
            </p>
          )}
          <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {personalData?.longBio || 'I build elegant, intuitive, and high-performing web applications that solve real-world problems.'}
          </p>
        </div>
      </section>

      {/* Resume Download */}
      <section className={`${isDark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-gray-100 border-gray-200'} border my-12 md:my-20 mx-6 md:mx-8 lg:mx-12 px-8 md:px-12 py-10 md:py-14 rounded-2xl`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className={`text-2xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Get My Resume
          </h3>
          <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Download my complete resume to see my skills, experience, and achievements
          </p>
          <a
            href={resumeData?.resumeUrl || '#'}
            download
            className={`inline-flex items-center gap-2 px-8 py-4 text-lg md:text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${isDark ? 'bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white shadow-lg shadow-rose-600/50' : 'bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-lg shadow-rose-500/50'}`}
          >
            <Download size={24} />
            Download Resume
          </a>
        </div>
      </section>

      {/* Education Section */}
      {educationData?.education && educationData.education.length > 0 && (
        <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 md:mb-16 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              Education
            </h2>
            <div className="space-y-6 md:space-y-8">
              {educationData.education.map((edu, index) => (
                <EducationBox key={index} education={edu} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {skillsData?.skills && skillsData.skills.length > 0 && (
        <section className={`${isDark ? 'bg-slate-800/30' : 'bg-gray-100'} px-6 md:px-8 lg:px-12 py-16 md:py-24`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 md:mb-16 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {skillsData.skills.map((skillGroup, index) => (
                <SkillBox key={index} category={skillGroup.category} items={skillGroup.items} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 md:mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                Featured Projects
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                A selection of my recent work
              </p>
            </div>
            <div className="space-y-6 md:space-y-8">
              {featuredProjects.map((project, index) => (
                <ProjectBox key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <section className={`${isDark ? 'bg-slate-800/30' : 'bg-gray-100'} px-6 md:px-8 lg:px-12 py-16 md:py-24`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 md:mb-16 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className={`p-6 md:p-8 rounded-2xl ${isDark ? 'bg-slate-900/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-rose-400' : 'text-rose-600'}`}>
                        {exp.position}
                      </h3>
                      <p className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-lg ${isDark ? 'bg-slate-700/50 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                      {exp.duration}
                    </span>
                  </div>
                  <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LeetCode Stats Section */}
      {leetcodeData && (
        <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Trophy size={32} className="text-yellow-500" />
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                LeetCode Progress
              </h2>
            </div>
            
            {/* Total Solved */}
            <div className={`p-6 md:p-8 rounded-xl mb-8 text-center ${isDark ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white`}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{leetcodeData?.total || 0}</div>
              <div className="text-lg md:text-xl opacity-90">Total Problems Solved</div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { 
                  label: 'Easy', 
                  solved: leetcodeData?.solved?.easy || 0, 
                  percentage: leetcodeData?.percentage?.easy || 0,
                  color: 'from-green-600 to-green-700',
                  bgColor: 'bg-green-600'
                },
                { 
                  label: 'Medium', 
                  solved: leetcodeData?.solved?.medium || 0, 
                  percentage: leetcodeData?.percentage?.medium || 0,
                  color: 'from-amber-600 to-amber-700',
                  bgColor: 'bg-amber-600'
                },
                { 
                  label: 'Hard', 
                  solved: leetcodeData?.solved?.hard || 0, 
                  percentage: leetcodeData?.percentage?.hard || 0,
                  color: 'from-red-600 to-red-700',
                  bgColor: 'bg-red-600'
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4 bg-gradient-to-r ${stat.color}`}>
                    {stat.label}
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.solved}
                  </div>
                  <div className={`text-sm md:text-base mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Problems Solved
                  </div>
                  <div className={`flex items-center justify-between text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span>Beats</span>
                    <span className="font-bold text-base">{stat.percentage.toFixed(2)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
