import { Briefcase, GraduationCap, Code, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Flutter Development Intern',
      company: 'Book Heaven Project',
      period: '2023',
      location: 'Team Leadership Role',
      description: 'Led a development team to create a comprehensive Flutter bookstore application. Managed project timeline, coordinated team efforts, and delivered a fully functional app with real-time inventory management and user authentication.',
      achievements: [
        'Successfully led a team of developers',
        'Delivered project on time and within scope',
        'Implemented real-time data synchronization',
        'Created intuitive user authentication system',
      ],
      technologies: ['Flutter', 'Firebase', 'Team Leadership', 'Project Management'],
      icon: <Code className="text-primary" size={24} />,
    },
    {
      type: 'work',
      title: 'Sales & Customer Relations',
      company: 'Car Dealership',
      period: '2022-2023',
      location: 'Business Development',
      description: 'Gained valuable business exposure through customer-facing roles in automotive sales. Developed strong communication skills, learned to understand client needs, and gained insights into business operations and customer relationship management.',
      achievements: [
        'Enhanced communication and interpersonal skills',
        'Developed customer needs assessment abilities',
        'Gained business operations experience',
        'Built strong client relationship management skills',
      ],
      technologies: ['Customer Relations', 'Sales', 'Business Operations', 'Communication'],
      icon: <Briefcase className="text-secondary" size={24} />,
    },
    {
      type: 'education',
      title: 'Computer Engineering Student',
      company: 'British University in Egypt',
      period: '2020-2024',
      location: 'Dual Certificate with London South Bank University',
      description: 'Comprehensive computer engineering education with focus on software development, networking, and system design. Completed various projects including cyber-physical systems, IoT applications, and mobile development.',
      achievements: [
        'Strong foundation in computer science principles',
        'Hands-on experience with multiple programming languages',
        'Completed complex engineering projects',
        'Developed analytical and problem-solving skills',
      ],
      technologies: ['Computer Engineering', 'Software Development', 'Networking', 'System Design'],
      icon: <GraduationCap className="text-success" size={24} />,
    },
    {
      type: 'project',
      title: 'Independent Developer',
      company: 'Personal Projects',
      period: '2021-Present',
      location: 'Continuous Learning',
      description: 'Developed multiple personal and academic projects spanning mobile apps, IoT systems, and AI integration. Continuously learning new technologies and applying them to real-world problems.',
      achievements: [
        'Built diverse portfolio of applications',
        'Explored AI and machine learning integration',
        'Developed IoT and hardware integration skills',
        'Created user-centered design solutions',
      ],
      technologies: ['Flutter', 'AI/ML', 'IoT', 'UI/UX Design', 'Arduino'],
      icon: <Users className="text-primary-dark" size={24} />,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship': return 'bg-primary text-primary-foreground';
      case 'work': return 'bg-secondary text-secondary-foreground';
      case 'education': return 'bg-success text-success-foreground';
      case 'project': return 'bg-primary-dark text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'internship': return 'Internship';
      case 'work': return 'Work Experience';
      case 'education': return 'Education';
      case 'project': return 'Projects';
      default: return 'Experience';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Experience & Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey combining technical expertise with leadership experience and continuous learning.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-gradient-card border-0 shadow-card overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Timeline indicator */}
                  <div className="lg:col-span-2 bg-gradient-primary p-6 text-white">
                    <div className="text-center">
                      <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                        {experience.icon}
                      </div>
                      <div className="font-semibold text-sm">{experience.period}</div>
                      <div className="text-xs text-white/80 mt-1">{experience.location}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-heading font-semibold text-xl text-foreground">
                            {experience.title}
                          </h3>
                          <Badge className={getTypeColor(experience.type)}>
                            {getTypeLabel(experience.type)}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium text-lg">{experience.company}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-2xl mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
                With a strong foundation in engineering, hands-on development experience, and leadership skills, 
                I'm excited to contribute to innovative projects and grow with forward-thinking organizations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">Full-time Opportunities</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">Remote Work</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">International Roles</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;