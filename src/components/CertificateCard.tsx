
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

export interface CertificateProps {
  id: string;
  title: string;
  courseName: string;
  issueDate: string;
  image: string;
  instructor: string;
  credentialId: string;
}

const CertificateCard = ({ certificate }: { certificate: CertificateProps }) => {
  const issueDate = new Date(certificate.issueDate);
  const formattedDate = issueDate.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="relative">
        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-5 text-white">
            <h3 className="font-bold text-lg">{certificate.title}</h3>
            <p className="text-sm text-white/80">{certificate.courseName}</p>
          </div>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Issued on</span>
            <span className="text-sm font-medium">{formattedDate}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Instructor</span>
            <span className="text-sm font-medium">{certificate.instructor}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Credential ID</span>
            <span className="text-sm font-medium">{certificate.credentialId}</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-5">
          <Button variant="secondary" size="sm" className="flex-1 gap-2">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
