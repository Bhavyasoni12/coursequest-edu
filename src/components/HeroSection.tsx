
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isLoaded ? 'animate-blur-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Transform Your Learning Journey
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Learn, Compete, <br />
                <span className="text-primary">Achieve Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md text-pretty">
                Join our platform to access premium courses, participate in challenging contests, and earn recognized certificates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/courses">
                <AnimatedButton size="lg" className="rounded-full" showArrow>
                  Explore Courses
                </AnimatedButton>
              </Link>
              <Link to="/contests">
                <AnimatedButton variant="outline" size="lg" className="rounded-full">
                  Join Contests
                </AnimatedButton>
              </Link>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} 
                        alt="User avatar" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-medium">Join 10,000+ learners</div>
                  <div className="text-sm text-muted-foreground">Start your journey today</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${isLoaded ? 'animate-blur-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <div className="relative mx-auto max-w-[500px]">
              <div className="glass p-4 md:p-6 rounded-2xl shadow-lg">
                <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=1000" 
                    alt="Student learning" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-5 space-y-3">
                  <h3 className="font-medium text-lg">Advanced Data Science</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Popular</span>
                      <span className="text-sm text-muted-foreground">8 modules</span>
                    </div>
                    <span className="text-primary font-medium">$89</span>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-4 -bottom-16 w-[200px] glass p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Certificate Earned</p>
                    <p className="text-xs text-muted-foreground">Web Development</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-10 top-20 w-[180px] glass p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">First Place</p>
                    <p className="text-xs text-muted-foreground">AI Hackathon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
