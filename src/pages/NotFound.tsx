
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    document.title = "Page Not Found - EduQuest";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="text-center px-4 max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-4xl">404</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It may have been moved, deleted, or never existed.
        </p>
        
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" className="rounded-full px-8">
              Return to Home
            </Button>
          </Link>
          
          <div className="pt-2">
            <Link to="/courses" className="text-primary hover:underline">
              Browse Courses
            </Link>
            <span className="mx-2 text-muted-foreground">•</span>
            <Link to="/contests" className="text-primary hover:underline">
              Explore Contests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
