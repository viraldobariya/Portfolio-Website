import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useGistData } from '../hooks/useGistData';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Loader } from 'lucide-react';

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  const { data: socialsData, loading: loadingSocials } = useGistData('socials.json');
  const { data: personalData } = useGistData('personal-info.json');

  const socials = socialsData?.socials || [];
  const email = personalData?.email || 'viraldobariya33@gmail.com';

  return (
    <footer className={`${isDark ? 'bg-slate-900 border-slate-800 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'} border-t transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent mb-2">
              {personalData?.name || 'Viral Dobariya'}
            </h3>
            <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              {personalData?.title || 'Full Stack Developer & DevOps Enthusiast'}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Contact</h4>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-rose-500" />
              <a href={`mailto:${email}`} className="hover:text-rose-500 transition-colors">
                {email}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Follow</h4>
            <div className="flex gap-4 flex-wrap">
              {loadingSocials ? (
                <Loader size={20} className="animate-spin" />
              ) : socials.length > 0 ? (
                socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-slate-800 text-gray-400 hover:text-rose-400' : 'hover:bg-gray-200 text-gray-600 hover:text-rose-500'}`}
                  >
                    <img 
                    src={social.icon} 
                    alt={social.name} 
                    className = "h-7 lg:h-10 rounded-sm"
                    />
                  </a>
                ))
              ) : null
              }
            </div>
          </div>
        </div>

        <div className={`border-t ${isDark ? 'border-slate-800' : 'border-gray-300'} pt-8 text-center text-sm ${isDark ? 'text-gray-600' : 'text-gray-700'}`}>
          <p>© {new Date().getFullYear()} {personalData?.name || 'Viral Dobariya'}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
