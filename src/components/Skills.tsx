import { useState, useEffect, useRef } from 'react';
import { Palette, Smartphone, Network, Users, Code, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: <Palette className="text-primary" size={28} />,
      skills: [
        { name: 'Wireframing & Prototyping', level: 90 },
        { name: 'User-Centered Design', level: 85 },
        { name: 'Figma & Design Tools', level: 88 },
        { name: 'Design Systems', level: 82 },
      ],
      color: 'primary',
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="text-secondary" size={28} />,
      skills: [
        { name: 'Flutter', level: 92 },
        { name: 'Firebase Integration', level: 85 },
        { name: 'SQLite & Local Storage', level: 80 },
        { name: 'App Architecture', level: 87 },
      ],
      color: 'secondary',
    },
    {
      title: 'Backend & Systems',
      icon: <Database className="text-success" size={28} />,
      skills: [
        { name: 'Database Design', level: 78 },
        { name: 'API Integration', level: 82 },
        { name: 'Firebase/Firestore', level: 85 },
        { name: 'Real-time Systems', level: 75 },
      ],
      color: 'success',
    },
    {
      title: 'Networking & IoT',
      icon: <Network className="text-primary-dark" size={28} />,
      skills: [
        { name: 'CCNA Knowledge', level: 88 },
        { name: 'Arduino Development', level: 75 },
        { name: 'IoT Systems', level: 70 },
        { name: 'Network Protocols', level: 82 },
      ],
      color: 'primary-dark',
    },
    {
      title: 'Development Tools',
      icon: <Code className="text-destructive" size={28} />,
      skills: [
        { name: 'MATLAB/Simulink', level: 80 },
        { name: 'Gazebo/RViz', level: 75 },
        { name: 'Git Version Control', level: 85 },
        { name: 'Agile Methodologies', level: 78 },
      ],
      color: 'destructive',
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-secondary-light" size={28} />,
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Project Management', level: 85 },
        { name: 'Client Communication', level: 88 },
        { name: 'Problem Solving', level: 92 },
      ],
      color: 'secondary-light',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning design, development, and technical systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="hover-lift bg-gradient-card border-0 shadow-card overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-muted p-3 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 100 + skillIndex * 150}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Progress */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white font-bold text-lg`}>
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Overall Proficiency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="font-heading font-semibold text-2xl mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and methodologies to stay at the forefront of design and development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React Native', 'Machine Learning', 'Cloud Architecture', 'Advanced Analytics'].map((skill, index) => (
                <span key={index} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;