
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WorkoutsPage = () => {
  // Static placeholder data - would come from API/database in a real app
  const workouts = [
    {
      id: 1,
      date: "May 19, 2025",
      title: "Upper Body Strength",
      description: "Chest, shoulders, triceps",
      duration: "45 min"
    },
    {
      id: 2,
      date: "May 17, 2025",
      title: "Lower Body + Core",
      description: "Squats, lunges, planks",
      duration: "50 min"
    },
    {
      id: 3,
      date: "May 15, 2025",
      title: "HIIT Cardio",
      description: "30 min interval training",
      duration: "30 min"
    },
    {
      id: 4,
      date: "May 12, 2025",
      title: "Full Body Circuit",
      description: "Mixed strength and cardio",
      duration: "60 min"
    },
    {
      id: 5,
      date: "May 10, 2025",
      title: "Recovery Day",
      description: "Stretching and mobility",
      duration: "25 min"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">Your Workouts</h1>
          
          {/* Mobile view: Cards */}
          <div className="md:hidden space-y-4">
            {workouts.map((workout) => (
              <Card key={workout.id} className="rounded-xl">
                <CardContent className="p-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">{workout.date}</span>
                    <h3 className="font-medium text-lg">{workout.title}</h3>
                    <p className="text-sm text-gray-600">{workout.description}</p>
                    <p className="text-sm text-gray-500 mt-1">Duration: {workout.duration}</p>
                    <Link 
                      to={`/workouts/${workout.id}`}
                      className="mt-3 text-apexfit-600 flex items-center hover:underline text-sm font-medium"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Desktop view: Table */}
          <div className="hidden md:block">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Workout</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workouts.map((workout) => (
                    <TableRow key={workout.id}>
                      <TableCell className="font-medium">{workout.date}</TableCell>
                      <TableCell>{workout.title}</TableCell>
                      <TableCell>{workout.description}</TableCell>
                      <TableCell>{workout.duration}</TableCell>
                      <TableCell>
                        <Link 
                          to={`/workouts/${workout.id}`}
                          className="text-apexfit-600 flex items-center hover:underline text-sm font-medium"
                        >
                          <span className="sr-only">View details for {workout.title}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkoutsPage;
