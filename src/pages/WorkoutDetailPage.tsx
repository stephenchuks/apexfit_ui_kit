
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WorkoutDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data - would be fetched from API based on ID in real app
  const workoutId = Number(id);
  
  // This would be a database lookup in a real application
  const workouts = {
    1: {
      id: 1,
      date: "May 19, 2025",
      title: "Upper Body Strength",
      description: "Chest, shoulders, triceps focus",
      duration: "45 min",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10", weight: "135 lbs" },
        { name: "Shoulder Press", sets: 3, reps: "10-12", weight: "45 lbs" },
        { name: "Tricep Dips", sets: 3, reps: "12-15", weight: "Bodyweight" },
        { name: "Chest Flys", sets: 3, reps: "12", weight: "25 lbs" },
        { name: "Lateral Raises", sets: 3, reps: "15", weight: "15 lbs" }
      ]
    },
    2: {
      id: 2,
      date: "May 17, 2025",
      title: "Lower Body + Core",
      description: "Squats, lunges, planks",
      duration: "50 min",
      exercises: [
        { name: "Back Squats", sets: 4, reps: "10", weight: "135 lbs" },
        { name: "Walking Lunges", sets: 3, reps: "12 each", weight: "20 lbs" },
        { name: "Romanian Deadlifts", sets: 3, reps: "12", weight: "95 lbs" },
        { name: "Plank", sets: 3, reps: "45 sec", weight: "Bodyweight" },
        { name: "Russian Twists", sets: 3, reps: "20", weight: "10 lbs" }
      ]
    },
    3: {
      id: 3,
      date: "May 15, 2025",
      title: "HIIT Cardio",
      description: "30 min interval training",
      duration: "30 min",
      exercises: [
        { name: "Burpees", sets: 4, reps: "45 sec", weight: "Bodyweight" },
        { name: "Mountain Climbers", sets: 4, reps: "45 sec", weight: "Bodyweight" },
        { name: "Jump Squats", sets: 4, reps: "45 sec", weight: "Bodyweight" },
        { name: "High Knees", sets: 4, reps: "45 sec", weight: "Bodyweight" },
        { name: "Rest", sets: 4, reps: "15 sec", weight: "-" }
      ]
    },
    4: {
      id: 4,
      date: "May 12, 2025",
      title: "Full Body Circuit",
      description: "Mixed strength and cardio",
      duration: "60 min",
      exercises: [
        { name: "Kettlebell Swings", sets: 3, reps: "15", weight: "35 lbs" },
        { name: "Push-ups", sets: 3, reps: "12-15", weight: "Bodyweight" },
        { name: "Goblet Squats", sets: 3, reps: "12", weight: "35 lbs" },
        { name: "Bent-Over Rows", sets: 3, reps: "12", weight: "30 lbs" },
        { name: "Bicycle Crunches", sets: 3, reps: "20", weight: "Bodyweight" }
      ]
    },
    5: {
      id: 5,
      date: "May 10, 2025",
      title: "Recovery Day",
      description: "Stretching and mobility",
      duration: "25 min",
      exercises: [
        { name: "Foam Rolling", sets: 1, reps: "5 min", weight: "-" },
        { name: "Hip Flexor Stretch", sets: 3, reps: "30 sec each", weight: "-" },
        { name: "Hamstring Stretch", sets: 3, reps: "30 sec each", weight: "-" },
        { name: "Shoulder Mobility", sets: 2, reps: "1 min", weight: "-" },
        { name: "Child's Pose", sets: 1, reps: "2 min", weight: "-" }
      ]
    }
  };
  
  const workout = workouts[workoutId as keyof typeof workouts];
  
  // Handle case where workout doesn't exist
  if (!workout) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Link to="/workouts" className="flex items-center text-apexfit-600 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Workouts
          </Link>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-2">Workout Not Found</h1>
            <p>The workout you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <Link to="/workouts" className="flex items-center text-apexfit-600 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Workouts
          </Link>
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">{workout.title}</h1>
            <p className="text-gray-500">{workout.date} • {workout.duration}</p>
            <p className="mt-2">{workout.description}</p>
          </div>
          
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Exercise</th>
                      <th className="text-left py-3 px-4">Sets</th>
                      <th className="text-left py-3 px-4">Reps</th>
                      <th className="text-left py-3 px-4">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workout.exercises.map((exercise, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-3 px-4 font-medium">{exercise.name}</td>
                        <td className="py-3 px-4">{exercise.sets}</td>
                        <td className="py-3 px-4">{exercise.reps}</td>
                        <td className="py-3 px-4">{exercise.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* Placeholder for future features */}
          <div className="mt-8 text-gray-500 text-sm">
            {/* This would be where we'd add comments, ratings, or workout logging in a real app */}
            {/* Would fetch from Supabase or other backend */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkoutDetailPage;
