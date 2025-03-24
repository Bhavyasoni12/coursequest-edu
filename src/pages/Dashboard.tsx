
import { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Trophy, 
  Medal, 
  Settings, 
  CreditCard, 
  User
} from "lucide-react";
import CertificateCard, { CertificateProps } from "@/components/CertificateCard";

// Mock data for certificates
const certificatesData: CertificateProps[] = [
  {
    id: "1",
    title: "Web Development Certificate",
    courseName: "Complete Web Development Bootcamp",
    issueDate: "2023-08-15",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    instructor: "Sarah Johnson",
    credentialId: "WD-2023-89754"
  },
  {
    id: "2",
    title: "Data Science Certificate",
    courseName: "Data Science Fundamentals",
    issueDate: "2023-06-20",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    instructor: "Michael Chen",
    credentialId: "DS-2023-45621"
  },
  {
    id: "3",
    title: "AI Competition Winner",
    courseName: "Global AI Hackathon",
    issueDate: "2023-05-10",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    instructor: "Contest Team",
    credentialId: "AI-HACK-2023-1254"
  }
];

// Dashboard sub-pages components
const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-secondary/30 rounded-xl p-6 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">My Courses</h3>
            <BookOpen className="text-primary h-5 w-5" />
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-muted-foreground">2 in progress, 1 completed</p>
        </div>
        
        <div className="bg-secondary/30 rounded-xl p-6 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">My Contests</h3>
            <Trophy className="text-primary h-5 w-5" />
          </div>
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm text-muted-foreground">1 active, 1 completed</p>
        </div>
        
        <div className="bg-secondary/30 rounded-xl p-6 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Certificates</h3>
            <Medal className="text-primary h-5 w-5" />
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-muted-foreground">2 course, 1 contest</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">In Progress</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-border/50">
              <div className="flex gap-4 items-center">
                <div className="w-20 h-14 rounded overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                    alt="Web Development" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm mb-1 truncate">Complete Web Development Bootcamp</h4>
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Progress: 65%</span>
                    <span>18/28 lessons</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-border/50">
              <div className="flex gap-4 items-center">
                <div className="w-20 h-14 rounded overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                    alt="Data Science" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm mb-1 truncate">Data Science Fundamentals</h4>
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Progress: 30%</span>
                    <span>8/24 lessons</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Upcoming Contests</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-border/50">
              <div className="flex gap-4 items-center">
                <div className="w-20 h-14 rounded overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                    alt="AI Hackathon" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm mb-1 truncate">Global AI Hackathon</h4>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Starts in 3 days</span>
                    <span>342 participants</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="shrink-0">
                  Prepare
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-border/50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Recommended for you</span>
                <Button variant="ghost" size="sm" className="h-8">View All</Button>
              </div>
              <Separator className="my-3" />
              <div className="space-y-2">
                <div className="text-sm hover:bg-secondary/30 p-2 rounded-md">
                  <Link to="/contests/5" className="block">
                    <span className="font-medium">Cybersecurity Capture The Flag</span>
                    <p className="text-xs text-muted-foreground">Registration open</p>
                  </Link>
                </div>
                <div className="text-sm hover:bg-secondary/30 p-2 rounded-md">
                  <Link to="/contests/6" className="block">
                    <span className="font-medium">UX Design Challenge</span>
                    <p className="text-xs text-muted-foreground">Registration open</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyCourses = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">My Courses</h2>
      
      <Tabs defaultValue="in-progress">
        <TabsList className="mb-6">
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
        </TabsList>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-full sm:w-40 h-28 rounded-lg overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                  alt="Web Development" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <h3 className="font-medium text-lg mb-2">Complete Web Development Bootcamp</h3>
                <p className="text-sm text-muted-foreground mb-4">Learn HTML, CSS, JavaScript, React and Node.js to become a full-stack web developer.</p>
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Progress: 65%</p>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p>18/28 lessons completed</p>
                    <p className="text-muted-foreground">Last accessed: Today</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Link to="/courses/1">
                    <Button className="w-full sm:w-auto">Continue Learning</Button>
                  </Link>
                  <Button variant="outline" className="w-full sm:w-auto">View Certificate</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-full sm:w-40 h-28 rounded-lg overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                  alt="Data Science" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <h3 className="font-medium text-lg mb-2">Data Science Fundamentals</h3>
                <p className="text-sm text-muted-foreground mb-4">Master Python, statistics, and machine learning to start your journey in data science.</p>
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Progress: 30%</p>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p>8/24 lessons completed</p>
                    <p className="text-muted-foreground">Last accessed: 2 days ago</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Link to="/courses/2">
                    <Button className="w-full sm:w-auto">Continue Learning</Button>
                  </Link>
                  <Button variant="outline" className="w-full sm:w-auto">View Certificate</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

const MyContests = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">My Contests</h2>
      
      <Tabs defaultValue="active">
        <TabsList className="mb-6">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
            <div className="aspect-video w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                alt="AI Hackathon" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 right-3">
                <div className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                  Active
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">Global AI Hackathon</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Start Date:</span>
                  <span>Dec 15, 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">End Date:</span>
                  <span>Dec 17, 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Team:</span>
                  <span>TechInnovators (4 members)</span>
                </div>
              </div>
              <Button className="w-full rounded-full">Go to Contest</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
            <div className="aspect-video w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                alt="Data Science Competition" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 right-3">
                <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                  Completed
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">Data Science Competition</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Start Date:</span>
                  <span>Oct 1, 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">End Date:</span>
                  <span>Oct 31, 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Result:</span>
                  <span className="text-green-600 font-medium">3rd Place</span>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-full">View Results</Button>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

const Certificates = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">My Certificates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">My Profile</h2>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold">Jennifer Wilson</h3>
          <p className="text-muted-foreground">Web Developer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-4">Personal Information</h4>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Full Name</label>
                <input 
                  type="text" 
                  value="Jennifer Wilson" 
                  className="w-full p-2 rounded-md border border-border bg-background"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Email</label>
                <input 
                  type="email" 
                  value="jennifer.wilson@example.com" 
                  className="w-full p-2 rounded-md border border-border bg-background"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Location</label>
                <input 
                  type="text" 
                  value="San Francisco, CA" 
                  className="w-full p-2 rounded-md border border-border bg-background"
                  readOnly
                />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Skills & Interests</h4>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Skills</label>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Interests</label>
                <div className="flex flex-wrap gap-2">
                  {["Web Development", "Data Science", "UI/UX Design", "Machine Learning"].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button className="w-full md:w-auto">Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

const Account = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Account Settings</h2>
      
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
          <h3 className="text-lg font-medium mb-4">Email & Password</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground block mb-1">Email</label>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  value="jennifer.wilson@example.com" 
                  className="flex-1 p-2 rounded-md border border-border bg-background"
                  readOnly
                />
                <Button variant="outline">Change</Button>
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1">Password</label>
              <div className="flex gap-2">
                <input 
                  type="password" 
                  value="********" 
                  className="flex-1 p-2 rounded-md border border-border bg-background"
                  readOnly
                />
                <Button variant="outline">Change</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
          <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Course Updates</p>
                <p className="text-sm text-muted-foreground">Get notified about updates to your enrolled courses</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Contest Reminders</p>
                <p className="text-sm text-muted-foreground">Get reminders before contests start</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive email notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Billing = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Billing & Payment</h2>
      
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
          <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-6 bg-blue-600 rounded"></div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">Add Payment Method</Button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
          <h3 className="text-lg font-medium mb-4">Billing History</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <div>
                <p className="font-medium">Complete Web Development Bootcamp</p>
                <p className="text-sm text-muted-foreground">Oct 15, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$89.99</p>
                <p className="text-sm text-green-600">Paid</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4 border-b border-border">
              <div>
                <p className="font-medium">Data Science Fundamentals</p>
                <p className="text-sm text-muted-foreground">Sep 22, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$79.99</p>
                <p className="text-sm text-green-600">Paid</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4">
              <div>
                <p className="font-medium">Global AI Hackathon Registration</p>
                <p className="text-sm text-muted-foreground">Nov 5, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$25.00</p>
                <p className="text-sm text-green-600">Paid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Dashboard - EduQuest";
  }, []);
  
  // Extract the active tab from the current path
  const getActiveTab = () => {
    const path = location.pathname.split('/').pop();
    
    switch (path) {
      case 'courses':
        return 'courses';
      case 'contests':
        return 'contests';
      case 'certificates':
        return 'certificates';
      case 'profile':
        return 'profile';
      case 'account':
        return 'account';
      case 'billing':
        return 'billing';
      default:
        return 'overview';
    }
  };
  
  const activeTab = getActiveTab();
  
  const handleTabChange = (value: string) => {
    if (value === 'overview') {
      navigate('/dashboard');
    } else {
      navigate(`/dashboard/${value}`);
    }
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
        </div>
        
        <div className="mb-6 overflow-auto">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="inline-flex h-auto p-1 w-auto">
              <TabsTrigger value="overview" className="rounded-full px-4">
                Overview
              </TabsTrigger>
              <TabsTrigger value="courses" className="rounded-full px-4">
                My Courses
              </TabsTrigger>
              <TabsTrigger value="contests" className="rounded-full px-4">
                My Contests
              </TabsTrigger>
              <TabsTrigger value="certificates" className="rounded-full px-4">
                Certificates
              </TabsTrigger>
              <TabsTrigger value="profile" className="rounded-full px-4">
                Profile
              </TabsTrigger>
              <TabsTrigger value="account" className="rounded-full px-4">
                Account
              </TabsTrigger>
              <TabsTrigger value="billing" className="rounded-full px-4">
                Billing
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/courses" element={<MyCourses />} />
          <Route path="/contests" element={<MyContests />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
