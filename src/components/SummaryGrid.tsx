
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BarChart, LineChart, ArrowRight } from 'lucide-react';

const SummaryGrid = () => {
  // Static placeholder data 
  const nextWorkout = "Mon, May 26 · 6:00 PM";
  const workoutsThisMonth = 12;
  const currentWeight = "180 lb";
  const weightDate = "May 20";
  const progress = "+5 lb";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {/* Next Workout Card */}
      <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500 flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Next Workout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">{nextWorkout}</p>
          <div className="mt-2">
            <a href="#" className="text-apexfit-600 text-sm flex items-center hover:underline">
              View details <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Total Workouts Card */}
      <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500 flex items-center">
            <BarChart className="h-4 w-4 mr-2" />
            Workouts This Month
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">{workoutsThisMonth}</p>
          <p className="text-sm text-muted-foreground mt-1">
            4 more than last month
          </p>
        </CardContent>
      </Card>

      {/* Current Weight Card */}
      <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500 flex items-center">
            <LineChart className="h-4 w-4 mr-2" />
            Current Weight
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">{currentWeight}</p>
          <p className="text-sm text-muted-foreground mt-1">as of {weightDate}</p>
        </CardContent>
      </Card>

      {/* Progress Card */}
      <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500 flex items-center">
            <ArrowRight className="h-4 w-4 mr-2" />
            Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold text-green-600">{progress}</p>
          <p className="text-sm text-muted-foreground mt-1">since last month</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryGrid;
