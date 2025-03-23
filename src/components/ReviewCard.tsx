
import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  college: string;
  program: string;
  year: string;
  rating: number;
  review: string;
  imageSrc?: string;
  delay?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  college,
  program,
  year,
  rating,
  review,
  imageSrc,
  delay = '0ms'
}) => {
  return (
    <div 
      className="animate-on-scroll bg-white border border-border rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow" 
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-start gap-4">
        {imageSrc ? (
          <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-medium text-lg">{name.charAt(0)}</span>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-medium text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">
                {program} at {college}, {year}
              </p>
            </div>
            
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-3">
            <p className="text-foreground text-sm line-clamp-4">{review}</p>
          </div>
          
          <div className="mt-3 flex justify-end">
            <button className="text-primary text-xs font-medium hover:underline">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
