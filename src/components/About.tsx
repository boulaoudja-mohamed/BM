import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Master's in Network Administration and Security",
      institution: "University",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "University",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  const certifications = [
    "CCNA (1, 2, 3)",
    "MySQL Database Management - Shiar Academy",
    "Digital Marketing - Edraak",
    "Cybersecurity - Edraak"
  ];

  const experience = [
    {
      role: "IT Specialist",
      type: "Current Position",
      description: "Managing IT infrastructure and providing technical solutions"
    },
    {
      role: "Application and Web Developer",
      type: "Current Position",
      description: "Developing web applications and mobile solutions"
    },
    {
      role: "Software Engineer",
      type: "Previous Role",
      description: "Designed and implemented software solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16 animate-fade-in">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2 group">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300" />
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors duration-300">Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500 dark:border-blue-400 pl-4 hover:border-blue-400 dark:hover:border-blue-300 transition-colors duration-300">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-sm hover:text-blue-600 dark:hover:text-blue-100 transition-colors duration-200">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2 group">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors duration-300" />
                <span className="group-hover:text-green-600 dark:group-hover:text-green-100 transition-colors duration-300">Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="block w-full text-center border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-green-500 dark:hover:border-green-400 hover:text-green-600 dark:hover:text-green-100 hover:bg-green-50 dark:hover:bg-green-500/10 transition-all duration-300 hover:scale-105"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2 group">
                <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors duration-300" />
                <span className="group-hover:text-purple-600 dark:group-hover:text-purple-100 transition-colors duration-300">Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-purple-500 dark:border-purple-400 pl-4 hover:border-purple-400 dark:hover:border-purple-300 transition-colors duration-300">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-sm hover:text-purple-600 dark:hover:text-purple-100 transition-colors duration-200">{exp.role}</h3>
                    <p className="text-purple-600 dark:text-purple-300 text-xs mb-1 hover:text-purple-500 dark:hover:text-purple-200 transition-colors duration-200">{exp.type}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
