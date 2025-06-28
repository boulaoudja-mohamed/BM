import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
            <h3 className="text-white font-bold text-xl mb-4 hover:text-blue-400 transition-colors duration-300">Boulaoudja Mohamed</h3>
            <p className="text-gray-400 text-sm leading-relaxed hover:text-gray-300 transition-colors duration-300">
              IT Specialist & Full-Stack Developer passionate about creating innovative 
              solutions and building impactful, efficient, and scalable systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
            <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/boulaoudja-mohamed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:drop-shadow-lg"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-boulaoudja-a74302185" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-lg"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:boulaoudjamohamd@gmail.com"
                className="text-gray-400 hover:text-green-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-lg"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/213675247393" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-lg"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
          <p className="text-gray-400 text-sm">
            © {currentYear} Boulaoudja Mohamed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
