
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingPage = () => {
  // Static training sessions data that would come from a backend in production
  const trainingSessions = [
    { 
      id: '1',
      date: 'May 28, 2025', 
      time: '10:00 AM', 
      trainer: { id: '101', name: 'Alex Johnson', specialty: 'Strength' } 
    },
    { 
      id: '2',
      date: 'June 3, 2025', 
      time: '2:30 PM', 
      trainer: { id: '102', name: 'Sarah Williams', specialty: 'Yoga' } 
    },
    { 
      id: '3',
      date: 'June 10, 2025', 
      time: '11:15 AM', 
      trainer: { id: '103', name: 'Mike Davis', specialty: 'HIIT' } 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <h1 className="text-2xl font-bold mb-4 md:mb-0 dark:text-white">Personal Training</h1>
            <Link to="/training/book">
              <Button className="w-full md:w-auto">Book New Session</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingSessions.map((session) => (
              <Card key={session.id} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Training Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-apexfit-500" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-apexfit-500" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-apexfit-500" />
                    <Link 
                      to={`/trainer/${session.trainer.id}`}
                      className="text-apexfit-600 dark:text-apexfit-400 hover:underline"
                    >
                      {session.trainer.name} ({session.trainer.specialty})
                    </Link>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Reschedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty state for when no sessions are booked */}
          {trainingSessions.length === 0 && (
            <Card className="rounded-2xl text-center p-8 mt-4">
              <div className="flex flex-col items-center">
                <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2 dark:text-white">No training sessions</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  You don't have any upcoming personal training sessions.
                </p>
                <Link to="/training/book">
                  <Button>Book Your First Session</Button>
                </Link>
              </div>
            </Card>
          )}
          
          {/* Comment indicating where a real API call would be */}
          {/* In production: useQuery to fetch upcoming training sessions from Supabase */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPage;
