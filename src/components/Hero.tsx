import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 relative overflow-hidden">
      <FloatingElements />
      
      {/* Enhanced animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 dark:bg-green-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-500/20 dark:bg-yellow-400/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-pink-500/20 dark:bg-pink-400/10 rounded-full blur-2xl animate-drift"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 dark:from-blue-400 dark:via-purple-400 dark:to-green-400 bg-clip-text text-transparent animate-gradient-x">
              Boulaoudja Mohamed
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            IT Specialist & Full-Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <Badge variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-default shadow-lg hover:shadow-blue-500/25 animate-scale-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
              Web Development
            </Badge>
            <Badge variant="secondary" className="bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-all duration-300 cursor-default shadow-lg hover:shadow-green-500/25 animate-scale-in opacity-0 [animation-delay:0.9s] [animation-fill-mode:forwards]">
              Mobile Apps
            </Badge>
            <Badge variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 cursor-default shadow-lg hover:shadow-purple-500/25 animate-scale-in opacity-0 [animation-delay:1.0s] [animation-fill-mode:forwards]">
              Desktop Apps
            </Badge>
            <Badge variant="secondary" className="bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 transition-all duration-300 cursor-default shadow-lg hover:shadow-orange-500/25 animate-scale-in opacity-0 [animation-delay:1.1s] [animation-fill-mode:forwards]">
              Network Security
            </Badge>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">
          Graduate with Bachelor's in Computer Science and Master's in Network Administration & Security. 
          Passionate about creating innovative solutions and building impactful, efficient, and scalable systems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0 [animation-delay:1.4s] [animation-fill-mode:forwards]">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 animate-glow-pulse"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in opacity-0 [animation-delay:1.6s] [animation-fill-mode:forwards]">
          <a 
            href="https://github.com/boulaoudja-mohamed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:-translate-y-1 animate-bounce-gentle"
            style={{ animationDelay: '1.8s' }}
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohamed-boulaoudja-a74302185" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:-translate-y-1 animate-bounce-gentle"
            style={{ animationDelay: '2.0s' }}
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:boulaoudjamohamd@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:-translate-y-1 animate-bounce-gentle"
            style={{ animationDelay: '2.2s' }}
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://wa.me/213675247393" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:-translate-y-1 animate-bounce-gentle"
            style={{ animationDelay: '2.4s' }}
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
