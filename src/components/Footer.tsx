import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-drift"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="animate-slide-in-left opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
            <h3 className="text-white font-bold text-xl mb-4 hover:text-blue-400 transition-colors duration-300 group">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Boulaoudja Mohamed
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed hover:text-gray-300 transition-colors duration-300">
              IT Specialist & Full-Stack Developer passionate about creating innovative 
              solutions and building impactful, efficient, and scalable systems.
            </p>
            
            {/* Additional info */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group">
              <p className="text-gray-300 text-xs font-medium mb-2">Available for:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Remote Work</span>
                <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full border border-green-500/30">Freelance</span>
                <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30">Consulting</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm group animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </span>
                </button>
              ))}
            </div>
            
            {/* Skills preview */}
            <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <p className="text-gray-300 text-xs font-medium mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-1">
                {['React', 'Node.js', 'Python', 'TypeScript'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50 hover:bg-gray-600/50 transition-colors duration-300 animate-scale-in opacity-0"
                    style={{ animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in-right opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
            <h4 className="text-white font-semibold mb-6 text-lg">Connect With Me</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://github.com/boulaoudja-mohamed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:drop-shadow-lg p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50 group animate-scale-in opacity-0"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-boulaoudja-a74302185" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-lg p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 group animate-scale-in opacity-0"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
              >
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:boulaoudjamohamd@gmail.com"
                className="text-gray-400 hover:text-green-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-lg p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-700/50 group animate-scale-in opacity-0"
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://wa.me/213675247393" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-lg p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-700/50 group animate-scale-in opacity-0"
                style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
              >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Contact info */}
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
              <p className="text-gray-300 text-xs font-medium mb-2">Quick Contact:</p>
              <p className="text-gray-400 text-xs mb-1">📧 boulaoudjamohamd@gmail.com</p>
              <p className="text-gray-400 text-xs">📱 +213 675 247 393</p>
              <p className="text-gray-400 text-xs mt-2">📍 Sétif, Algeria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
          <p className="text-gray-400 text-sm">
            © {currentYear} Boulaoudja Mohamed. 
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs text-gray-500">
            <span className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Privacy Policy</span>
            <span className="text-gray-600">•</span>
            <span className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Terms of Service</span>
            <span className="text-gray-600">•</span>
            <span className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
