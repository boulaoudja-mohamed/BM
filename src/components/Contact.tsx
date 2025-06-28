import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MessageCircle, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Email",
      value: "boulaoudjamohamd@gmail.com",
      href: "mailto:boulaoudjamohamd@gmail.com",
      description: "Send me an email",
      color: "blue"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "WhatsApp",
      value: "+213 675 247 393",
      href: "https://wa.me/213675247393",
      description: "Chat on WhatsApp",
      color: "green"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "LinkedIn",
      value: "mohamed-boulaoudja-a74302185",
      href: "https://www.linkedin.com/in/mohamed-boulaoudja-a74302185",
      description: "Connect professionally",
      color: "linkedin"
    },
    {
      icon: <Github className="h-6 w-6 text-gray-600 dark:text-gray-400" />,
      title: "GitHub",
      value: "github.com/boulaoudja-mohamed",
      href: "https://github.com/boulaoudja-mohamed",
      description: "View my code",
      color: "gray"
    }
  ];

  const getHoverColors = (color: string) => {
    const colors = {
      blue: "hover:border-blue-500/50 hover:shadow-blue-500/10",
      green: "hover:border-green-500/50 hover:shadow-green-500/10",
      linkedin: "hover:border-blue-600/50 hover:shadow-blue-600/10",
      gray: "hover:border-gray-500/50 hover:shadow-gray-500/10"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 relative transition-colors duration-500 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-2xl animate-drift"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-500/10 dark:bg-green-400/5 rounded-full blur-xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-4 animate-fade-in">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          Ready to collaborate on your next project? I'm always open to discussing new opportunities, 
          innovative ideas, and potential partnerships. Let's build something amazing together.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className={`bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl ${getHoverColors(method.color)} group animate-scale-in opacity-0`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <span className="transition-transform duration-300 block">
                          {method.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors duration-300">{method.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{method.description}</p>
                        <a 
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 text-sm hover:underline group-hover:translate-x-1 inline-block"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:scale-105 group animate-scale-in opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors duration-300">Location</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Sétif, Algeria</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Available for remote work worldwide</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-in-right opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl animate-glow-pulse">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
                      <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John"
                        className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
                      />
                    </div>
                    <div className="animate-fade-in opacity-0 [animation-delay:0.9s] [animation-fill-mode:forwards]">
                      <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe"
                        className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div className="animate-fade-in opacity-0 [animation-delay:1.0s] [animation-fill-mode:forwards]">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
                    />
                  </div>
                  
                  <div className="animate-fade-in opacity-0 [animation-delay:1.1s] [animation-fill-mode:forwards]">
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project Discussion"
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
                    />
                  </div>
                  
                  <div className="animate-fade-in opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 animate-fade-in opacity-0 [animation-delay:1.3s] [animation-fill-mode:forwards]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
