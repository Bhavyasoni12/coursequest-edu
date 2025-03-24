
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";
import CourseCard, { CourseProps } from "@/components/CourseCard";

// Import all courses from FeaturedCourses component
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
  },
  {
    id: "7",
    title: "Cybersecurity Essentials",
    description: "Learn how to protect systems, networks, and programs from digital attacks.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 84.99,
    category: "Cybersecurity",
    level: "Intermediate",
    rating: 4.7,
    studentsCount: 3240,
    duration: "8 weeks",
    instructor: {
      name: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  },
  {
    id: "8",
    title: "Digital Marketing Strategy",
    description: "Master SEO, social media marketing, and content strategy to grow your business online.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 74.99,
    category: "Marketing",
    level: "Beginner",
    rating: 4.5,
    studentsCount: 7820,
    duration: "6 weeks",
    instructor: {
      name: "Sophia Martinez",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  },
  {
    id: "9",
    title: "Cloud Computing with AWS",
    description: "Build scalable and reliable applications using Amazon Web Services.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: 89.99,
    category: "Cloud Computing",
    level: "Intermediate",
    rating: 4.8,
    studentsCount: 5430,
    duration: "10 weeks",
    instructor: {
      name: "Thomas Brown",
      avatar: "https://randomuser.me/api/portraits/men/37.jpg"
    }
  }
];

// Add more categories
const categories = [
  "All Categories",
  "Web Development",
  "Data Science",
  "Mobile Development",
  "Artificial Intelligence",
  "Design",
  "Cybersecurity",
  "Marketing",
  "Cloud Computing"
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  
  useEffect(() => {
    document.title = "Courses - EduQuest";
  }, []);
  
  useEffect(() => {
    // Filter courses based on search, category, level, price, and free only
    const filtered = coursesData.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All Categories" || 
                             course.category === selectedCategory;
      
      const matchesLevel = !selectedLevel || course.level === selectedLevel;
      
      const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
      
      const matchesFree = !showFreeOnly || course.isFree;
      
      return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesFree;
    });
    
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, selectedLevel, priceRange, showFreeOnly]);
  
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedLevel("");
    setPriceRange([0, 100]);
    setShowFreeOnly(false);
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-muted-foreground text-lg">
            Discover a wide range of courses taught by industry experts
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="text"
              placeholder="Search for courses..."
              className="pl-10 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              className="rounded-full md:flex gap-2 items-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden md:inline">Filters</span>
              {(selectedLevel || priceRange[0] > 0 || priceRange[1] < 100 || showFreeOnly) && (
                <span className="ml-1 flex h-2 w-2 rounded-full bg-primary"></span>
              )}
            </Button>
          </div>
        </div>
        
        {/* Expanded Filters */}
        {isFilterOpen && (
          <div className="bg-background border rounded-xl p-6 mb-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Advanced Filters</h3>
              <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 gap-1">
                <X className="h-3 w-3" />
                <span>Reset</span>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <Label>Course Level</Label>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Level</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Price Range</Label>
                  <span className="text-sm text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <Slider 
                  defaultValue={[0, 100]} 
                  max={100} 
                  step={1} 
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
              </div>
              
              <div className="space-y-4">
                <Label>Other Filters</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="free-only" 
                    checked={showFreeOnly}
                    onCheckedChange={(checked) => setShowFreeOnly(checked as boolean)}
                  />
                  <label
                    htmlFor="free-only"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Free courses only
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {coursesData.length} courses
          </p>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-3xl mb-4">😕</div>
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any courses matching your criteria.
            </p>
            <Button onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
