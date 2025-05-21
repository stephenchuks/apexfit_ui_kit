
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentWorkouts = () => {
  // Static placeholder data
  const recentWorkouts = [
    {
      id: 1,
      date: "May 19, 2025",
      title: "Upper Body Strength",
      description: "Chest, shoulders, triceps"
    },
    {
      id: 2,
      date: "May 17, 2025",
      title: "Lower Body + Core",
      description: "Squats, lunges, planks"
    },
    {
      id: 3,
      date: "May 15, 2025",
      title: "HIIT Cardio",
      description: "30 min interval training"
    }
  ];

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Recent Workouts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          {recentWorkouts.map((workout) => (
            <li key={workout.id} className="pb-4 border-b last:border-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">{workout.date}</span>
                  <h3 className="font-medium text-lg">{workout.title}</h3>
                  <p className="text-sm text-gray-600">{workout.description}</p>
                </div>
                <Link 
                  to={`/workouts/${workout.id}`}
                  className="mt-2 sm:mt-0 text-apexfit-600 flex items-center hover:underline text-sm font-medium"
                >
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentWorkouts;
