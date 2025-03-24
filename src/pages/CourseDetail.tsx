
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Clock, 
  Globe, 
  Bookmark, 
  Share2, 
  Play, 
  FileText, 
  BarChart, 
  CheckCircle, 
  Users, 
  Star, 
  MessageCircle, 
  ShieldCheck 
} from "lucide-react";
import { CourseProps } from "@/components/CourseCard";

// Import courses data from Courses.tsx
const coursesData: CourseProps[] = [
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
  }
];

// Additional course detail information
interface CourseDetailProps extends CourseProps {
  language: string;
  lastUpdated: string;
  description: string;
  longDescription: string;
  requirements: string[];
  whatYouWillLearn: string[];
  curriculum: {
    section: string;
    duration: string;
    lessons: {
      title: string;
      duration: string;
      type: "video" | "text" | "quiz";
      preview?: boolean;
    }[];
  }[];
  reviews: {
    id: string;
    user: string;
    userAvatar: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

// Mock detailed data for course 1
const courseDetails: CourseDetailProps = {
  ...coursesData[0],
  language: "English",
  lastUpdated: "August 2023",
  longDescription: "This comprehensive web development bootcamp takes you from absolute beginner to professional developer. You'll learn to build fully-fledged websites and web apps with HTML, CSS, JavaScript, React, Node.js, and more. Through hands-on projects and real-world examples, you'll gain practical experience that will prepare you for a career in web development.",
  requirements: [
    "No programming experience needed - we'll teach you everything from scratch",
    "A computer (Windows, Mac, or Linux) with an internet connection",
    "No paid software required - all tools we use are free",
    "A basic understanding of how to use a computer"
  ],
  whatYouWillLearn: [
    "Build responsive, accessible, and beautiful websites with HTML and CSS",
    "Program in JavaScript with confidence, using the latest ES6+ syntax",
    "Create full-stack web applications with React and Node.js",
    "Implement authentication, file uploads, and connect to databases",
    "Deploy your applications to the internet for others to see",
    "Learn professional developer best practices"
  ],
  curriculum: [
    {
      section: "Getting Started with Web Development",
      duration: "2 hours",
      lessons: [
        {
          title: "Introduction to Web Development",
          duration: "15 min",
          type: "video",
          preview: true
        },
        {
          title: "Setting Up Your Development Environment",
          duration: "25 min",
          type: "video",
          preview: true
        },
        {
          title: "Understanding How the Web Works",
          duration: "20 min",
          type: "video"
        },
        {
          title: "Your First HTML Page",
          duration: "30 min",
          type: "video"
        },
        {
          title: "Module Quiz",
          duration: "10 min",
          type: "quiz"
        }
      ]
    },
    {
      section: "HTML Fundamentals",
      duration: "3.5 hours",
      lessons: [
        {
          title: "HTML Document Structure",
          duration: "20 min",
          type: "video"
        },
        {
          title: "Working with Text Elements",
          duration: "25 min",
          type: "video"
        },
        {
          title: "Links and Navigation",
          duration: "30 min",
          type: "video"
        },
        {
          title: "Images and Media",
          duration: "35 min",
          type: "video"
        },
        {
          title: "Tables and Forms",
          duration: "45 min",
          type: "video"
        },
        {
          title: "HTML5 Semantic Elements",
          duration: "30 min",
          type: "video"
        },
        {
          title: "HTML Assessment",
          duration: "15 min",
          type: "quiz"
        }
      ]
    },
    {
      section: "CSS Styling",
      duration: "6 hours",
      lessons: [
        {
          title: "Introduction to CSS",
          duration: "20 min",
          type: "video"
        },
        {
          title: "Selectors and Properties",
          duration: "30 min",
          type: "video"
        },
        {
          title: "Box Model and Layout",
          duration: "45 min",
          type: "video"
        },
        {
          title: "Colors and Typography",
          duration: "35 min",
          type: "video"
        },
        {
          title: "Responsive Design with Media Queries",
          duration: "50 min",
          type: "video"
        },
        {
          title: "Flexbox Layout",
          duration: "55 min",
          type: "video"
        },
        {
          title: "CSS Grid Layout",
          duration: "60 min",
          type: "video"
        },
        {
          title: "CSS Animations and Transitions",
          duration: "40 min",
          type: "video"
        },
        {
          title: "CSS Assessment",
          duration: "15 min",
          type: "quiz"
        }
      ]
    },
    {
      section: "JavaScript Basics",
      duration: "8 hours",
      lessons: [
        {
          title: "Introduction to JavaScript",
          duration: "30 min",
          type: "video"
        },
        {
          title: "Variables and Data Types",
          duration: "40 min",
          type: "video"
        },
        {
          title: "Operators and Expressions",
          duration: "35 min",
          type: "video"
        },
        {
          title: "Control Flow: Conditionals",
          duration: "45 min",
          type: "video"
        },
        {
          title: "Control Flow: Loops",
          duration: "40 min",
          type: "video"
        },
        {
          title: "Functions",
          duration: "55 min",
          type: "video"
        },
        {
          title: "Arrays and Objects",
          duration: "60 min",
          type: "video"
        },
        {
          title: "DOM Manipulation",
          duration: "70 min",
          type: "video"
        },
        {
          title: "Events and Event Handling",
          duration: "50 min",
          type: "video"
        },
        {
          title: "JavaScript Assessment",
          duration: "25 min",
          type: "quiz"
        }
      ]
    }
  ],
  reviews: [
    {
      id: "1",
      user: "Alex Thompson",
      userAvatar: "https://randomuser.me/api/portraits/men/42.jpg",
      rating: 5,
      date: "October 12, 2023",
      comment: "This course is incredible! I had zero programming experience, and now I've built several websites and even landed a job as a junior developer. The instructor explains complex concepts in an easy-to-understand way. Highly recommended!"
    },
    {
      id: "2",
      user: "Jennifer Lopez",
      userAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 4,
      date: "September 3, 2023",
      comment: "Great course overall. The content is comprehensive and well-structured. I knocked off one star because some of the React content is slightly outdated, but the instructor does provide updates in the Q&A section."
    },
    {
      id: "3",
      user: "Mohammed Ali",
      userAvatar: "https://randomuser.me/api/portraits/men/77.jpg",
      rating: 5,
      date: "August 27, 2023",
      comment: "I've taken several web development courses, and this is by far the best. The projects are practical and fun to build, and I learned so much more than I expected. Worth every penny!"
    }
  ]
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<CourseDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Use courseDetails for course with id "1", otherwise find in coursesData
      if (courseId === "1") {
        setCourse(courseDetails);
      } else {
        const foundCourse = coursesData.find(c => c.id === courseId);
        if (foundCourse) {
          // Create dummy detailed data
          setCourse({
            ...foundCourse,
            language: "English",
            lastUpdated: "July 2023",
            longDescription: foundCourse.description + " This course provides in-depth knowledge and practical skills through hands-on projects and exercises.",
            requirements: [
              "Basic understanding of computers",
              "No prior experience needed in " + foundCourse.category
            ],
            whatYouWillLearn: [
              "Master the fundamentals of " + foundCourse.category,
              "Build real-world projects for your portfolio",
              "Gain practical skills valued by employers",
              "Learn industry best practices and techniques"
            ],
            curriculum: [
              {
                section: "Introduction to " + foundCourse.category,
                duration: "2 hours",
                lessons: [
                  {
                    title: "Getting Started",
                    duration: "15 min",
                    type: "video",
                    preview: true
                  },
                  {
                    title: "Setting Up Your Environment",
                    duration: "25 min",
                    type: "video",
                    preview: true
                  },
                  {
                    title: "Core Concepts",
                    duration: "30 min",
                    type: "video"
                  }
                ]
              },
              {
                section: "Building Your First Project",
                duration: "4 hours",
                lessons: [
                  {
                    title: "Project Overview",
                    duration: "20 min",
                    type: "video"
                  },
                  {
                    title: "Step-by-Step Implementation",
                    duration: "45 min",
                    type: "video"
                  },
                  {
                    title: "Testing and Debugging",
                    duration: "35 min",
                    type: "video"
                  }
                ]
              }
            ],
            reviews: [
              {
                id: "1",
                user: "John Smith",
                userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 5,
                date: "October 5, 2023",
                comment: "Excellent course! The instructor explains complex topics clearly and the projects are engaging."
              },
              {
                id: "2",
                user: "Emily Johnson",
                userAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
                rating: 4,
                date: "September 15, 2023",
                comment: "Very good course with practical examples. Would recommend to anyone interested in " + foundCourse.category + "."
              }
            ]
          });
        } else {
          // Handle not found
          setCourse(null);
        }
      }
      setLoading(false);
    }, 500);
  }, [courseId]);
  
  useEffect(() => {
    if (course) {
      document.title = `${course.title} - EduQuest`;
    } else {
      document.title = "Course Details - EduQuest";
    }
  }, [course]);
  
  if (loading) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex justify-center">
        <div className="animate-pulse space-y-8 w-full max-w-4xl">
          <div className="h-8 bg-secondary rounded w-3/4"></div>
          <div className="h-80 bg-secondary rounded"></div>
          <div className="space-y-4">
            <div className="h-6 bg-secondary rounded w-1/2"></div>
            <div className="h-4 bg-secondary rounded w-full"></div>
            <div className="h-4 bg-secondary rounded w-full"></div>
            <div className="h-4 bg-secondary rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist or may have been removed.</p>
        <Link to="/courses">
          <Button>Browse All Courses</Button>
        </Link>
      </div>
    );
  }
  
  // Calculate total course duration
  const totalDuration = course.curriculum.reduce(
    (total, section) => {
      const sectionMinutes = parseInt(section.duration.split(' ')[0]) * 60;
      return total + sectionMinutes;
    }, 0
  );
  
  const totalHours = Math.floor(totalDuration / 60);
  const totalMinutes = totalDuration % 60;
  
  // Calculate total lessons
  const totalLessons = course.curriculum.reduce(
    (total, section) => total + section.lessons.length, 0
  );
  
  // Calculate average rating
  const averageRating = course.reviews.reduce(
    (sum, review) => sum + review.rating, 0
  ) / course.reviews.length;
  
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className="bg-primary/5 text-primary">
                {course.category}
              </Badge>
              <Badge variant="secondary">{course.level}</Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {course.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${star <= Math.round(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="font-medium">{course.rating}</span>
                <span className="text-muted-foreground ml-1">({course.studentsCount.toLocaleString()} students)</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{totalHours}h {totalMinutes}m total length</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span>{course.language}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">Last updated: {course.lastUpdated}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={course.instructor.avatar} 
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">Instructor</p>
                <p className="text-muted-foreground">{course.instructor.name}</p>
              </div>
            </div>
          </div>
          
          {/* Course Preview Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 glass rounded-xl overflow-hidden shadow-lg border border-primary/10">
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button className="rounded-full" size="lg">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Preview
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  {course.isFree ? (
                    <span className="text-2xl font-bold text-green-600">Free</span>
                  ) : (
                    <span className="text-2xl font-bold">${course.price}</span>
                  )}
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <Button className="w-full mb-4 rounded-full">Enroll Now</Button>
                
                <p className="text-center text-sm text-muted-foreground mb-6">
                  30-Day Money-Back Guarantee
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-medium">This course includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Play className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span>{totalHours}+ hours on-demand video</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span>{totalLessons} lessons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span>Forum access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span>Lifetime access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-muted-foreground">
                  {course.longDescription}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Course Content</h2>
                <div className="text-sm text-muted-foreground">
                  {course.curriculum.length} sections • {totalLessons} lessons • {totalHours}h {totalMinutes}m total length
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {course.curriculum.map((section, index) => (
                  <AccordionItem value={`section-${index}`} key={index}>
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex justify-between w-full pr-4">
                        <div className="text-left">
                          <span className="font-medium">{section.section}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {section.duration} • {section.lessons.length} lessons
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-1 py-2">
                        {section.lessons.map((lesson, lIndex) => (
                          <div 
                            key={lIndex} 
                            className="flex items-center justify-between p-3 rounded-md hover:bg-secondary/50"
                          >
                            <div className="flex items-center gap-3">
                              {lesson.type === "video" ? (
                                <Play className="h-4 w-4 text-muted-foreground" />
                              ) : lesson.type === "text" ? (
                                <FileText className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <BarChart className="h-4 w-4 text-muted-foreground" />
                              )}
                              <span>{lesson.title}</span>
                              {lesson.preview && (
                                <Badge variant="outline" className="ml-2 text-xs">Preview</Badge>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="instructor">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{course.instructor.name}</h2>
                    <p className="text-muted-foreground mb-4">
                      {course.category} Expert and Professional Instructor
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span>4.8 Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-muted-foreground" />
                        <span>1,240 Reviews</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-muted-foreground" />
                        <span>38,590 Students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Play className="w-5 h-5 text-muted-foreground" />
                        <span>12 Courses</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">About the Instructor</h3>
                  <p className="text-muted-foreground mb-3">
                    {course.instructor.name} is a highly experienced {course.category} professional with over 10 years of industry experience. They have worked with top companies and have helped thousands of students master the skills needed to succeed in the field.
                  </p>
                  <p className="text-muted-foreground">
                    Their teaching approach focuses on practical, hands-on learning that prepares students for real-world challenges. With a passion for education and a deep understanding of the subject matter, they create courses that are both informative and engaging.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-secondary/30 rounded-xl p-6 md:w-80">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">{averageRating.toFixed(1)}</div>
                      <div className="flex justify-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-5 h-5 ${star <= Math.round(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">Course Rating</p>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const count = course.reviews.filter(r => Math.round(r.rating) === rating).length;
                        const percentage = (count / course.reviews.length) * 100;
                        
                        return (
                          <div key={rating} className="flex items-center gap-3">
                            <div className="flex items-center w-20">
                              <span>{rating}</span>
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 ml-1" />
                            </div>
                            <Progress value={percentage} className="h-2" />
                            <span className="text-sm text-muted-foreground w-10">{percentage.toFixed(0)}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                    
                    <div className="space-y-6">
                      {course.reviews.map((review) => (
                        <div key={review.id} className="border-b border-border pb-6 last:border-0">
                          <div className="flex items-start gap-4">
                            <img 
                              src={review.userAvatar} 
                              alt={review.user}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex flex-wrap justify-between gap-2">
                                <h4 className="font-medium">{review.user}</h4>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <div className="flex mb-2 mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="outline" className="rounded-full">
                        Show More Reviews
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
