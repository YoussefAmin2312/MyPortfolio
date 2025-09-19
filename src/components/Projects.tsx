import { ExternalLink, Github, Users, Smartphone, Heart, Car, Thermometer, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Book Heaven',
      description: 'Flutter bookstore app developed during internship. Led a team to create a comprehensive book discovery and purchasing platform with real-time inventory management.',
      icon: <Users className="text-primary" size={24} />,
      technologies: ['Flutter', 'Firebase', 'Team Leadership', 'Real-time Data'],
      category: 'Mobile App',
      highlights: ['Team Leadership', 'Real-time Inventory', 'User Authentication'],
    },
    {
      title: 'Mend - AI Couples Therapy',
      description: 'MVP for a voice-based AI couples therapy app. Innovative approach to relationship counseling using AI technology and voice interaction.',
      icon: <Heart className="text-secondary" size={24} />,
      technologies: ['Flutter', 'AI Integration', 'Voice Processing', 'MVP'],
      category: 'AI/Healthcare',
      highlights: ['AI Technology', 'Voice-based UI', 'Healthcare Innovation'],
    },
    {
      title: 'Yoga Face & Skin Care',
      description: 'Wellness app concept focusing on facial yoga exercises and skincare routines. Emphasis on clean UI/UX design and user engagement.',
      icon: <Smartphone className="text-success" size={24} />,
      technologies: ['UI/UX Design', 'Flutter', 'Wellness', 'User Experience'],
      category: 'Wellness',
      highlights: ['Wellness Focus', 'Clean Design', 'User Engagement'],
    },
    {
      title: 'Cyber-Physical Systems',
      description: 'Advanced simulation project featuring autonomous vehicle navigation and drone mapping systems using MATLAB, Gazebo, and RViz.',
      icon: <Car className="text-primary-dark" size={24} />,
      technologies: ['MATLAB', 'Gazebo', 'RViz', 'Autonomous Systems'],
      category: 'Engineering',
      highlights: ['Autonomous Systems', 'Advanced Simulation', 'Multi-platform'],
    },
    {
      title: 'Digital Temperature Sensor',
      description: 'IoT project using Arduino and DS18B20 sensor for precise temperature monitoring and data logging with digital display.',
      icon: <Thermometer className="text-destructive" size={24} />,
      technologies: ['Arduino', 'DS18B20', 'IoT', 'Data Logging'],
      category: 'IoT',
      highlights: ['Hardware Integration', 'Data Logging', 'Real-time Monitoring'],
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing design process, development skills, and project case studies with smooth animations.',
      icon: <Globe className="text-secondary-light" size={24} />,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Modern Design'],
      category: 'Web Development',
      highlights: ['Modern Design', 'Responsive', 'Smooth Animations'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning mobile development, AI integration, IoT systems, and user experience design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-gradient-card border-0 shadow-card group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-muted p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="px-6 pb-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 flex gap-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    View Case Study
                  </Button>
                  <Button size="sm" variant="outline" className="aspect-square p-0">
                    <Github size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more details about any of these projects?
          </p>
          <Button size="lg" className="hover:scale-105 transition-transform">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;