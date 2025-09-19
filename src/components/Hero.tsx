import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import profileAvatar from '@/assets/profile-avatar.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 glass"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Avatar */}
          <div className="mb-8 fade-in">
            <div className="relative inline-block">
              <img
                src={profileAvatar}
                alt="Youssef Yasser"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white/20 shadow-xl float"
              />
              <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl text-white mb-6 fade-in-delay-1">
            Youssef Yasser
          </h1>

          {/* Subtitle */}
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 fade-in-delay-2">
            Computer Engineer | UI/UX Designer | Mobile App Developer
          </p>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto fade-in-delay-2">
            Building meaningful experiences through design and code
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 fade-in-delay-3">
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 text-lg shadow-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 text-lg backdrop-blur-sm"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 fade-in-delay-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:youssef.job21@gmail.com"
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="text-white/70 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;