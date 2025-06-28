
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Shield, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6 text-blue-400" />,
      color: "blue",
      skills: [
        { name: "HTML/CSS/JavaScript", level: 95 },
        { name: "React/Vue.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "PHP", level: 80 }
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6 text-green-400" />,
      color: "green",
      skills: [
        { name: "MySQL", level: 95 },
        { name: "PostgreSQL", level: 90 },
        { name: "Oracle", level: 85 },
        { name: "SQL Server", level: 85 }
      ]
    },
    {
      title: "Network Security",
      icon: <Shield className="h-6 w-6 text-red-400" />,
      color: "red",
      skills: [
        { name: "CCNA", level: 90 },
        { name: "Cybersecurity", level: 85 },
        { name: "Network Administration", level: 90 },
        { name: "Security Protocols", level: 80 }
      ]
    },
    {
      title: "Mobile & Desktop",
      icon: <Smartphone className="h-6 w-6 text-purple-400" />,
      color: "purple",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Electron", level: 85 },
        { name: "Cross-platform Development", level: 90 }
      ]
    }
  ];

  const getHoverColors = (color: string) => {
    const colors = {
      blue: "hover:border-blue-500/50 hover:shadow-blue-500/10",
      green: "hover:border-green-500/50 hover:shadow-green-500/10",
      red: "hover:border-red-500/50 hover:shadow-red-500/10",
      purple: "hover:border-purple-500/50 hover:shadow-purple-500/10"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16 animate-fade-in">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`bg-gray-900 border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-xl ${getHoverColors(category.color)} animate-fade-in opacity-0`}
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 group">
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <span className="group-hover:text-gray-100 transition-colors duration-300">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">{skill.name}</span>
                        <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-200">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="h-2 transition-all duration-1000 ease-out"
                        style={{
                          transitionDelay: `${skillIndex * 200}ms`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
