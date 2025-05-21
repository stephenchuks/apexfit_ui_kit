
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Lock } from 'lucide-react';

export type BadgeType = {
  id: number;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
};

// Static badges data
export const badges: BadgeType[] = [
  {
    id: 1,
    name: "First Workout",
    description: "Complete your first workout",
    icon: "🏋️",
    earned: true,
    earnedDate: "Apr 10, 2025"
  },
  {
    id: 2,
    name: "Early Bird",
    description: "Complete 5 workouts before 8am",
    icon: "🌅",
    earned: true,
    earnedDate: "Apr 22, 2025"
  },
  {
    id: 3,
    name: "Workout Warrior",
    description: "Complete 10 workouts in a month",
    icon: "⚔️",
    earned: true,
    earnedDate: "May 5, 2025"
  },
  {
    id: 4,
    name: "Consistency King",
    description: "Maintain a 7-day streak",
    icon: "👑",
    earned: true,
    earnedDate: "May 15, 2025"
  },
  {
    id: 5,
    name: "Weight Milestone",
    description: "Reach your weight goal",
    icon: "⚖️",
    earned: false
  },
  {
    id: 6,
    name: "Strength Master",
    description: "Increase strength by 50%",
    icon: "💪",
    earned: false
  },
  {
    id: 7,
    name: "Marathon Ready",
    description: "Run 26.2 miles total",
    icon: "🏃",
    earned: false
  },
  {
    id: 8,
    name: "Ultimate Athlete",
    description: "Complete all workout categories",
    icon: "🏆",
    earned: false
  }
];

interface BadgeGalleryProps {
  limit?: number;
  showUnlocked?: boolean;
  compact?: boolean;
}

const BadgeGallery = ({ 
  limit, 
  showUnlocked = true, 
  compact = false 
}: BadgeGalleryProps) => {
  // Filter badges based on props
  const displayBadges = badges
    .filter(badge => showUnlocked || badge.earned)
    .slice(0, limit);

  return (
    <div className={`grid ${compact ? 'grid-cols-3 gap-4' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'}`}>
      {displayBadges.map((badge) => (
        <TooltipProvider key={badge.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div 
                className={`relative flex flex-col items-center ${
                  compact ? 'p-2' : 'p-4'
                } rounded-xl border ${
                  badge.earned 
                    ? 'bg-white dark:bg-gray-800 border-apexfit-200 dark:border-gray-700' 
                    : 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800'
                } ${compact ? '' : 'hover:shadow-md transition-shadow'}`}
              >
                <div 
                  className={`${
                    compact ? 'text-2xl mb-1' : 'text-4xl mb-3'
                  } ${
                    badge.earned ? '' : 'opacity-40'
                  }`}
                >
                  {badge.icon}
                </div>
                <h3 className={`font-medium ${
                  compact ? 'text-xs' : 'text-sm'
                } ${
                  badge.earned ? '' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {badge.name}
                </h3>
                
                {!badge.earned && !compact && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-black/20 rounded-xl">
                    <Lock className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </div>
                )}
                
                {badge.earned && badge.earnedDate && !compact && (
                  <Badge variant="secondary" className="mt-2 text-xs">
                    Earned {badge.earnedDate}
                  </Badge>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-medium">{badge.name}</p>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
              {badge.earned && badge.earnedDate && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Earned on {badge.earnedDate}</p>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default BadgeGallery;
