import bookHeavenImg from '@/assets/book-heaven-project.jpg';
import theraImg from '@/assets/thera-project.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-white pt-20">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        {/* Hero Content - Centered */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#222222] mb-3">
            Youssef Yasser
          </h1>
          <p className="text-base text-[#555555] uppercase tracking-wider">
            UX/UI DESIGNER
          </p>
        </div>

        {/* Portfolio Preview Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-16">
          {/* Left mockup - Book Heaven */}
          <div className="w-full md:w-[45%] max-w-md">
            <img 
              src={bookHeavenImg}
              alt="Book Heaven Project"
              className="w-full h-auto rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            />
          </div>

          {/* Right mockup - Thera */}
          <div className="w-full md:w-[45%] max-w-md">
            <img 
              src={theraImg}
              alt="Thera Project"
              className="w-full h-auto rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;