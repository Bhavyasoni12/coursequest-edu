
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import UpcomingContests from "@/components/UpcomingContests";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/AnimatedButton";
import { CheckCircle2, BookOpen, Trophy, Medal, Laptop, Users } from "lucide-react";

const Index = () => {
  // Set title
  useEffect(() => {
    document.title = "EduQuest - Learn, Compete, Achieve";
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose EduQuest?</h2>
            <p className="text-muted-foreground text-lg">
              Our platform offers a unique blend of learning and competition to accelerate your growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 space-y-4 transition-all hover:bg-secondary/60 hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Expert-Led Courses</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of experience and proven expertise.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 space-y-4 transition-all hover:bg-secondary/60 hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Skill-Building Contests</h3>
              <p className="text-muted-foreground">
                Test your knowledge in competitive environments and win recognition and prizes.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 space-y-4 transition-all hover:bg-secondary/60 hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Medal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Recognized Certificates</h3>
              <p className="text-muted-foreground">
                Earn verifiable credentials that showcase your expertise to employers.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 space-y-4 transition-all hover:bg-secondary/60 hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Hands-On Projects</h3>
              <p className="text-muted-foreground">
                Apply what you learn through practical, real-world projects that build your portfolio.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 space-y-4 transition-all hover:bg-secondary/60 hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Community Support</h3>
              <p className="text-muted-foreground">
                Connect with peers and mentors who will help you succeed in your learning journey.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 space-y-4 transition-all hover:bg-secondary/60 hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Flexible Learning</h3>
              <p className="text-muted-foreground">
                Study at your own pace with lifetime access to course materials and resources.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
      
      <FeaturedCourses />
      
      <UpcomingContests />
      
      {/* Certificates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Earn Industry-Recognized Certificates</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our certificates are respected by employers worldwide. Showcase your skills and achievements with verifiable credentials that stand out.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Verified digital credentials linked to your profile",
                  "Share directly to LinkedIn and other platforms",
                  "Available for both course completion and contest wins",
                  "Includes skills assessment and competency ratings"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/dashboard/certificates">
                <AnimatedButton showArrow className="rounded-full">
                  View Certificate Showcase
                </AnimatedButton>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-r from-primary/5 to-primary/20 blur-2xl transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                alt="Certificate showcase" 
                className="rounded-xl shadow-lg relative z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students already learning and competing on our platform. Start with free courses or jump into a contest today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/courses">
                <Button size="lg" className="rounded-full px-8">Get Started Free</Button>
              </Link>
              <Link to="/contests">
                <Button variant="outline" size="lg" className="rounded-full px-8">Browse Contests</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
