
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const StreakTracker = () => {
  // Static placeholder data
  const currentStreak = 5;
  const targetStreak = 7;
  const streakPercentage = (currentStreak / targetStreak) * 100;
  
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Current Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-2xl font-bold">{currentStreak} days</span>
          <span className="text-sm text-muted-foreground ml-2">/{targetStreak} day goal</span>
        </div>
        
        <Progress value={streakPercentage} className="h-2 mb-4" />
        
        <div className="flex justify-between mt-2">
          {Array.from({ length: targetStreak }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <Badge 
                variant={index < currentStreak ? "default" : "outline"}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${index < currentStreak ? 'bg-apexfit-600 dark:bg-apexfit-500' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}
              >
                {index + 1}
              </Badge>
              <span className="text-xs mt-1">Day</span>
            </div>
          ))}
        </div>
        
        {/* Show a motivational message */}
        {currentStreak >= 3 && (
          <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-4">
            Great work! Keep your momentum going!
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StreakTracker;
