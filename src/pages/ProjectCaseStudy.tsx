import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import bookHeavenImg from '@/assets/book-heaven-project.jpg';
import mendAiImg from '@/assets/mend-ai-project.jpg';
import yogaSkincareImg from '@/assets/yoga-skincare-project.jpg';
import cyberPhysicalImg from '@/assets/cyber-physical-project.jpg';
import temperatureSensorImg from '@/assets/temperature-sensor-project.jpg';
import portfolioWebsiteImg from '@/assets/portfolio-website-project.jpg';

const ProjectCaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = {
    'book-heaven': {
      title: 'Book Heaven',
      subtitle: 'Flutter Bookstore App with Team Leadership',
      image: bookHeavenImg,
      category: 'Mobile App',
      duration: '3 months',
      team: '4 developers',
      role: 'Team Leader & Flutter Developer',
      technologies: ['Flutter', 'Firebase', 'Real-time Database', 'Authentication'],
      overview: 'Led a team to develop a comprehensive bookstore application during my internship. The app features real-time inventory management, user authentication, and a seamless book discovery experience.',
      challenges: [
        'Managing a diverse team with different skill levels',
        'Implementing real-time inventory synchronization',
        'Creating an intuitive user interface for book discovery'
      ],
      solutions: [
        'Established clear communication protocols and regular team meetings',
        'Implemented Firebase real-time database for instant inventory updates',
        'Conducted user testing sessions to refine the UI/UX design'
      ],
      results: [
        'Successfully delivered the project within the 3-month timeline',
        'Achieved 95% user satisfaction in testing phase',
        'Gained valuable experience in team leadership and project management'
      ]
    },
    'mend-ai': {
      title: 'Mend - AI Couples Therapy',
      subtitle: 'Voice-Based AI Relationship Counseling MVP',
      image: mendAiImg,
      category: 'AI/Healthcare',
      duration: '4 months',
      team: '2 developers',
      role: 'Lead Developer & AI Integration Specialist',
      technologies: ['Flutter', 'AI/ML APIs', 'Voice Processing', 'Natural Language Processing'],
      overview: 'Developed an innovative MVP for AI-powered couples therapy using voice interaction technology. The app provides personalized relationship counseling through natural conversation.',
      challenges: [
        'Integrating complex AI models for relationship counseling',
        'Ensuring privacy and security for sensitive conversations',
        'Creating a natural voice interaction experience'
      ],
      solutions: [
        'Collaborated with AI specialists to fine-tune therapy models',
        'Implemented end-to-end encryption for all conversations',
        'Developed custom voice processing algorithms for better understanding'
      ],
      results: [
        'Created a functional MVP with positive user feedback',
        'Demonstrated innovative approach to digital healthcare',
        'Gained expertise in AI integration and healthcare technology'
      ]
    },
    'yoga-skincare': {
      title: 'Yoga Face & Skin Care',
      subtitle: 'Wellness App with Focus on Facial Yoga',
      image: yogaSkincareImg,
      category: 'Wellness',
      duration: '2 months',
      team: '1 developer',
      role: 'UI/UX Designer & Flutter Developer',
      technologies: ['Flutter', 'UI/UX Design', 'Animation Libraries', 'Local Storage'],
      overview: 'Designed and developed a wellness application focused on facial yoga exercises and skincare routines. Emphasized clean design and user engagement through interactive features.',
      challenges: [
        'Creating engaging exercise animations and instructions',
        'Designing an intuitive user flow for wellness routines',
        'Balancing feature richness with simplicity'
      ],
      solutions: [
        'Implemented smooth animations to guide users through exercises',
        'Conducted user research to understand wellness app preferences',
        'Created a minimalist design that promotes relaxation and focus'
      ],
      results: [
        'Delivered a polished wellness app with excellent user feedback',
        'Developed strong skills in wellness-focused UI/UX design',
        'Created a portfolio piece demonstrating design thinking process'
      ]
    },
    'cyber-physical': {
      title: 'Cyber-Physical Systems',
      subtitle: 'Autonomous Vehicle Simulation & Drone Mapping',
      image: cyberPhysicalImg,
      category: 'Engineering',
      duration: '6 months',
      team: '3 engineers',
      role: 'Systems Engineer & Simulation Specialist',
      technologies: ['MATLAB', 'Gazebo', 'RViz', 'ROS', 'Computer Vision'],
      overview: 'Advanced simulation project featuring autonomous vehicle navigation and drone mapping systems. Developed comprehensive cyber-physical systems using industry-standard tools.',
      challenges: [
        'Integrating multiple simulation platforms seamlessly',
        'Developing accurate autonomous navigation algorithms',
        'Creating realistic mapping and visualization systems'
      ],
      solutions: [
        'Created custom interfaces between MATLAB, Gazebo, and RViz',
        'Implemented advanced pathfinding and obstacle avoidance algorithms',
        'Developed real-time mapping visualization with detailed analytics'
      ],
      results: [
        'Successfully demonstrated autonomous vehicle navigation in complex environments',
        'Created accurate drone mapping system with 95% precision',
        'Gained deep expertise in robotics and autonomous systems'
      ]
    },
    'temperature-sensor': {
      title: 'Digital Temperature Sensor',
      subtitle: 'IoT Project with Arduino & Real-time Monitoring',
      image: temperatureSensorImg,
      category: 'IoT',
      duration: '1 month',
      team: '1 developer',
      role: 'IoT Developer & Hardware Integration Specialist',
      technologies: ['Arduino', 'DS18B20 Sensor', 'C++', 'Data Logging', 'Serial Communication'],
      overview: 'IoT project using Arduino and DS18B20 sensor for precise temperature monitoring and data logging with digital display and real-time data visualization.',
      challenges: [
        'Ensuring accurate temperature readings in various conditions',
        'Implementing reliable data logging and storage',
        'Creating an intuitive display for real-time monitoring'
      ],
      solutions: [
        'Calibrated sensors and implemented noise filtering algorithms',
        'Developed efficient data logging system with time-stamped entries',
        'Created clear digital display with trend visualization'
      ],
      results: [
        'Achieved ±0.1°C accuracy in temperature measurements',
        'Successfully logged data continuously for 30+ days',
        'Demonstrated practical IoT application with real-world utility'
      ]
    },
    'portfolio-website': {
      title: 'Portfolio Website',
      subtitle: 'Modern React Portfolio with Smooth Animations',
      image: portfolioWebsiteImg,
      category: 'Web Development',
      duration: '2 weeks',
      team: '1 developer',
      role: 'Full-Stack Developer & Designer',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      overview: 'Modern, responsive portfolio website showcasing design process, development skills, and project case studies with smooth animations and optimal user experience.',
      challenges: [
        'Creating engaging animations without affecting performance',
        'Ensuring perfect responsiveness across all devices',
        'Balancing visual appeal with loading speed'
      ],
      solutions: [
        'Implemented optimized animations using CSS transforms and Framer Motion',
        'Used mobile-first design approach with comprehensive testing',
        'Optimized images and implemented lazy loading for better performance'
      ],
      results: [
        'Achieved 95+ PageSpeed Insights score on all metrics',
        'Created a portfolio that effectively showcases technical skills',
        'Demonstrated modern web development best practices'
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
            <span className="text-sm text-muted-foreground">{project.duration}</span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Project Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Target className="text-primary mt-0.5" size={16} />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Solutions */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Solutions
              </h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Code className="text-primary mt-0.5" size={16} />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Results */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Results & Impact
              </h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ExternalLink className="text-primary mt-0.5" size={16} />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-primary" size={16} />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium text-foreground">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-primary" size={16} />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium text-foreground">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="text-primary" size={16} />
                  <div>
                    <p className="text-sm text-muted-foreground">My Role</p>
                    <p className="font-medium text-foreground">{project.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full">
                <ExternalLink size={16} className="mr-2" />
                View Live Project
              </Button>
              <Button variant="outline" className="w-full">
                <Github size={16} className="mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;