
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Trophy, Users } from "lucide-react";

export interface ContestProps {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  duration: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  participants: number;
  prizes: string[];
  isFeatured?: boolean;
  registrationOpen: boolean;
}

const ContestCard = ({ contest }: { contest: ContestProps }) => {
  const startDateTime = new Date(contest.startDate);
  const formattedDate = startDateTime.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  return (
    <Card className={`overflow-hidden h-full transition-all duration-300 hover-lift ${contest.isFeatured ? 'border-primary/30' : ''}`}>
      <div className="aspect-video w-full relative overflow-hidden">
        <img
          src={contest.image}
          alt={contest.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {contest.isFeatured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary hover:bg-primary/90">Featured</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-center space-x-2 mb-3">
          <Badge variant="outline" className="bg-primary/5 text-primary hover:bg-primary/10">
            {contest.category}
          </Badge>
          <Badge variant="secondary">{contest.level}</Badge>
        </div>
        
        <h3 className="font-bold text-xl mb-2">{contest.title}</h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {contest.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{contest.duration}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{contest.participants} participants</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Trophy className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Prizes: {contest.prizes.join(', ')}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-5 pb-5 pt-2">
        <Link to={`/contests/${contest.id}`} className="w-full">
          <Button 
            variant={contest.registrationOpen ? "default" : "secondary"} 
            className="w-full rounded-full"
            disabled={!contest.registrationOpen}
          >
            {contest.registrationOpen ? "Register Now" : "Registration Closed"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ContestCard;
