
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Building, Calculator, Package, Settings } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Queue Management System",
      description: "A comprehensive queue management solution adopted by the local administration for 14 branches in Sétif. Features real-time queue tracking, customer notifications, and administrative dashboards.",
      icon: <Users className="h-8 w-8 text-blue-400" />,
      tags: ["Web Development", "Real-time", "Admin Dashboard", "Multi-branch"],
      impact: "14 branches in Sétif",
      category: "Enterprise Solution",
      color: "blue"
    },
    {
      title: "Attendance Registration Application",
      description: "Advanced attendance tracking system adopted by Sétif University and various private companies. Includes biometric integration, reporting, and automated notifications.",
      icon: <Building className="h-8 w-8 text-green-400" />,
      tags: ["Mobile App", "Biometric", "University", "Enterprise"],
      impact: "University + Private Companies",
      category: "Educational & Corporate",
      color: "green"
    },
    {
      title: "Payroll Management Program",
      description: "Complete payroll management solution with automated calculations, tax compliance, employee self-service portal, and comprehensive reporting capabilities.",
      icon: <Calculator className="h-8 w-8 text-purple-400" />,
      tags: ["Desktop App", "Payroll", "Tax Compliance", "Reporting"],
      impact: "HR Automation",
      category: "Business Application",
      color: "purple"
    },
    {
      title: "Warehouse Management System",
      description: "Inventory and warehouse management system with barcode scanning, stock tracking, automated reordering, and integration with accounting systems.",
      icon: <Package className="h-8 w-8 text-orange-400" />,
      tags: ["Inventory", "Barcode", "Automation", "Integration"],
      impact: "Supply Chain Optimization",
      category: "Logistics Solution",
      color: "orange"
    },
    {
      title: "ERP System",
      description: "Enterprise Resource Planning system integrating multiple business processes including finance, HR, inventory, and customer management into a unified platform.",
      icon: <Settings className="h-8 w-8 text-red-400" />,
      tags: ["ERP", "Integration", "Finance", "Multi-module"],
      impact: "Complete Business Solution",
      category: "Enterprise Platform",
      color: "red"
    }
  ];

  const getHoverColors = (color: string) => {
    const colors = {
      blue: "hover:border-blue-500/50 hover:shadow-blue-500/20",
      green: "hover:border-green-500/50 hover:shadow-green-500/20",
      purple: "hover:border-purple-500/50 hover:shadow-purple-500/20",
      orange: "hover:border-orange-500/50 hover:shadow-orange-500/20",
      red: "hover:border-red-500/50 hover:shadow-red-500/20"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4 animate-fade-in">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          A showcase of enterprise-level solutions I've developed, adopted by universities, 
          local administration, and private companies.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gray-800 border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${getHoverColors(project.color)} group animate-fade-in opacity-0`}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </span>
                    <div>
                      <CardTitle className="text-white text-xl group-hover:text-gray-100 transition-colors duration-300">{project.title}</CardTitle>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{project.category}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">Impact: </span>
                  <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{project.impact}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
          <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:scale-105 transition-all duration-300 hover:shadow-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
