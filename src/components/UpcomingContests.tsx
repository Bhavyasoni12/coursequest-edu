
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContestCard, { ContestProps } from "./ContestCard";

// Mock data
const contests: ContestProps[] = [
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
  }
];

const UpcomingContests = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Contests</h2>
          <p className="text-muted-foreground">
            Test your skills, compete with peers, and win exciting prizes in our specially curated challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contests.map((contest) => (
            <ContestCard key={contest.id} contest={contest} />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/contests">
            <Button variant="outline" className="group rounded-full">
              View All Contests
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingContests;
