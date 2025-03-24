
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  isFree?: boolean;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  studentsCount: number;
  duration: string;
  instructor: {
    name: string;
    avatar: string;
  };
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover-lift">
        <div className="aspect-[16/10] w-full relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          {course.isFree ? (
            <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">Free</Badge>
          ) : (
            <Badge className="absolute top-3 left-3 bg-primary hover:bg-primary/90">${course.price}</Badge>
          )}
          <Badge variant="secondary" className="absolute top-3 right-3">
            {course.level}
          </Badge>
        </div>
        
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="bg-primary/5 text-primary hover:bg-primary/10">
              {course.category}
            </Badge>
            <div className="flex items-center text-sm">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{course.rating}</span>
              <span className="text-muted-foreground ml-1">({course.studentsCount})</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-lg mt-2 line-clamp-2">{course.title}</h3>
          
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {course.description}
          </p>
        </CardContent>
        
        <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={course.instructor.avatar} 
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-sm">{course.instructor.name}</span>
          </div>
          <span className="text-sm text-muted-foreground">{course.duration}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
