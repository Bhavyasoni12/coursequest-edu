
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import ContestCard, { ContestProps } from "@/components/ContestCard";

// Mock data for contests
const contestsData: ContestProps[] = [
  {
    id: "1",
    title: "Global AI Hackathon",
    description: "Create innovative AI solutions to solve real-world problems. Collaborate with teams from around the globe.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    startDate: "2023-12-15T09:00:00Z",
    endDate: "2023-12-17T18:00:00Z",
    duration: "48 hours",
    category: "Artificial Intelligence",
    level: "Advanced",
    participants: 342,
    prizes: ["$10,000", "Cloud Credits", "Mentorship"],
    isFeatured: true,
    registrationOpen: true
  },
  {
    id: "2",
    title: "Front-End Development Challenge",
    description: "Showcase your front-end skills by building responsive, accessible and beautiful user interfaces.",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    startDate: "2023-11-20T10:00:00Z",
    endDate: "2023-11-27T23:59:00Z",
    duration: "1 week",
    category: "Web Development",
    level: "Intermediate",
    participants: 156,
    prizes: ["$5,000", "Premium Courses", "Job Interviews"],
    registrationOpen: true
  },
  {
    id: "3",
    title: "Data Science Competition",
    description: "Analyze complex datasets and build predictive models to uncover insights and win prizes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    startDate: "2023-10-01T00:00:00Z",
    endDate: "2023-10-31T23:59:00Z",
    duration: "4 weeks",
    category: "Data Science",
    level: "Intermediate",
    participants: 520,
    prizes: ["$7,500", "GPU Credits", "Conference Tickets"],
    registrationOpen: false
  },
  {
    id: "4",
    title: "Mobile App Innovation Contest",
    description: "Design and develop innovative mobile apps that solve everyday problems and improve lives.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    startDate: "2024-01-10T00:00:00Z",
    endDate: "2024-02-10T23:59:00Z",
    duration: "4 weeks",
    category: "Mobile Development",
    level: "Beginner",
    participants: 230,
    prizes: ["$3,000", "App Store Publishing", "Mentorship"],
    registrationOpen: true
  },
  {
    id: "5",
    title: "Cybersecurity Capture The Flag",
    description: "Test your cybersecurity skills by solving challenges and capturing flags in this competitive event.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    startDate: "2023-11-05T09:00:00Z",
    endDate: "2023-11-06T21:00:00Z",
    duration: "36 hours",
    category: "Cybersecurity",
    level: "Advanced",
    participants: 185,
    prizes: ["$8,000", "Security Certifications", "Job Opportunities"],
    registrationOpen: true
  },
  {
    id: "6",
    title: "UX Design Challenge",
    description: "Create intuitive, accessible, and beautiful user experiences for web and mobile applications.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    startDate: "2023-11-15T00:00:00Z",
    endDate: "2023-11-30T23:59:00Z",
    duration: "2 weeks",
    category: "Design",
    level: "Intermediate",
    participants: 210,
    prizes: ["$4,000", "Design Tools License", "Portfolio Review"],
    registrationOpen: true
  },
  {
    id: "7",
    title: "Blockchain Development Hackathon",
    description: "Develop innovative blockchain applications that solve real-world problems and challenges.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    startDate: "2024-02-01T00:00:00Z",
    endDate: "2024-02-03T23:59:00Z",
    duration: "72 hours",
    category: "Blockchain",
    level: "Advanced",
    participants: 120,
    prizes: ["$15,000", "Investor Pitch", "Incubation"],
    registrationOpen: true,
    isFeatured: true
  },
  {
    id: "8",
    title: "Game Development Challenge",
    description: "Create engaging and innovative games using the latest game development technologies and techniques.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    startDate: "2023-12-01T00:00:00Z",
    endDate: "2023-12-31T23:59:00Z",
    duration: "4 weeks",
    category: "Game Development",
    level: "Intermediate",
    participants: 280,
    prizes: ["$6,000", "Publishing Deal", "Game Dev Tools"],
    registrationOpen: true
  }
];

const Contests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [filteredContests, setFilteredContests] = useState(contestsData);
  
  useEffect(() => {
    document.title = "Contests - EduQuest";
  }, []);
  
  useEffect(() => {
    // Filter contests based on filters
    const filtered = contestsData.filter(contest => {
      const matchesSearch = contest.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           contest.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || 
                          (statusFilter === "open" && contest.registrationOpen) ||
                          (statusFilter === "closed" && !contest.registrationOpen);
      
      const matchesCategory = categoryFilter === "all" || 
                             contest.category.toLowerCase() === categoryFilter.toLowerCase();
      
      const matchesLevel = levelFilter === "all" || contest.level === levelFilter;
      
      return matchesSearch && matchesStatus && matchesCategory && matchesLevel;
    });
    
    setFilteredContests(filtered);
  }, [searchTerm, statusFilter, categoryFilter, levelFilter]);
  
  // Get unique categories
  const categories = ["all", ...new Set(contestsData.map(contest => contest.category.toLowerCase()))];
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contests & Challenges</h1>
          <p className="text-muted-foreground text-lg">
            Showcase your skills, compete with peers, and win exciting prizes
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="text"
                placeholder="Search for contests..."
                className="pl-10 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[150px] rounded-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.filter(c => c !== "all").map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-[150px] rounded-full">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setStatusFilter}>
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 h-auto">
              <TabsTrigger value="all">All Contests</TabsTrigger>
              <TabsTrigger value="open">Open Registration</TabsTrigger>
              <TabsTrigger value="closed">Closed Registration</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredContests.length} of {contestsData.length} contests
          </p>
          <Select defaultValue="upcoming">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upcoming">Upcoming First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Contests Grid */}
        {filteredContests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContests.map((contest) => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No contests found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any contests matching your criteria.
            </p>
            <Button onClick={() => {
              setSearchTerm("");
              setStatusFilter("all");
              setCategoryFilter("all");
              setLevelFilter("all");
            }}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;
