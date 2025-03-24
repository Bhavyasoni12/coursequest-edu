
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import CourseCard, { CourseProps } from "./CourseCard";

// Mock data
const courses: CourseProps[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React and Node.js to become a full-stack web developer.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 89.99,
    category: "Web Development",
    level: "Beginner",
    rating: 4.8,
    studentsCount: 15420,
    duration: "12 weeks",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    description: "Master Python, statistics, and machine learning to start your journey in data science.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 79.99,
    category: "Data Science",
    level: "Intermediate",
    rating: 4.7,
    studentsCount: 8320,
    duration: "10 weeks",
    instructor: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: "3",
    title: "Mobile App Development with Flutter",
    description: "Build beautiful native apps for iOS and Android from a single codebase.",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 94.99,
    category: "Mobile Development",
    level: "Intermediate",
    rating: 4.9,
    studentsCount: 6540,
    duration: "8 weeks",
    instructor: {
      name: "Jessica Lee",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  },
  {
    id: "4",
    title: "Introduction to Artificial Intelligence",
    description: "Understand the basics of AI, machine learning, and neural networks.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 0,
    isFree: true,
    category: "Artificial Intelligence",
    level: "Beginner",
    rating: 4.6,
    studentsCount: 21350,
    duration: "6 weeks",
    instructor: {
      name: "David Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  },
  {
    id: "5",
    title: "UX/UI Design Masterclass",
    description: "Learn to create beautiful, intuitive interfaces that users will love.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 69.99,
    category: "Design",
    level: "Beginner",
    rating: 4.8,
    studentsCount: 9840,
    duration: "8 weeks",
    instructor: {
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  },
  {
    id: "6",
    title: "Advanced JavaScript Concepts",
    description: "Deep dive into JavaScript: closures, prototypes, async programming and more.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 99.99,
    category: "Web Development",
    level: "Advanced",
    rating: 4.9,
    studentsCount: 4670,
    duration: "6 weeks",
    instructor: {
      name: "Robert Taylor",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  }
];

const FeaturedCourses = () => {
  const [category, setCategory] = useState("all");
  
  const filteredCourses = category === "all" 
    ? courses 
    : courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Top Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses and start your learning journey today with industry experts
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-10">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 h-auto">
            <TabsTrigger value="all" onClick={() => setCategory("all")}>All</TabsTrigger>
            <TabsTrigger value="web" onClick={() => setCategory("web development")}>Web Dev</TabsTrigger>
            <TabsTrigger value="data" onClick={() => setCategory("data science")}>Data Science</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-8">
          <Link to="/courses">
            <Button variant="outline" className="group rounded-full">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
