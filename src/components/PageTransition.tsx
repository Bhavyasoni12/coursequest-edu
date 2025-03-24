
import { ReactNode, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (pageRef.current) {
      // Reset scroll position on page change
      window.scrollTo(0, 0);
      
      // Add animation classes
      pageRef.current.classList.add("animate-blur-in");
      
      // Clean up animation classes
      const cleanup = setTimeout(() => {
        if (pageRef.current) {
          pageRef.current.classList.remove("animate-blur-in");
        }
      }, 600);
      
      return () => clearTimeout(cleanup);
    }
  }, [location.pathname]);

  return (
    <main 
      ref={pageRef} 
      className="min-h-[calc(100vh-13rem)] w-full"
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </main>
  );
};

export default PageTransition;
