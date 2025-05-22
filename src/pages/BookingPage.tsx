
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useBranch } from '@/contexts/BranchContext';

const BookingPage = () => {
  const { selectedBranch } = useBranch();
  const navigate = useNavigate();
  
  // Static data for the form - in a real app these would come from the backend
  const [selectedTrainer, setSelectedTrainer] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Dummy data
  const trainers = [
    { id: '101', name: 'Alex Johnson - Strength' },
    { id: '102', name: 'Sarah Williams - Yoga' },
    { id: '103', name: 'Mike Davis - HIIT' },
    { id: '104', name: 'Emily Chen - Pilates' },
  ];
  
  const availableDates = [
    '2025-05-26', '2025-05-27', '2025-05-28', 
    '2025-05-29', '2025-05-30', '2025-06-02'
  ];
  
  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleBookSession = () => {
    // In a real app, this would send data to the backend
    // Show success message and navigate back to the training page
    navigate('/training');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Link to="/training" className="flex items-center text-apexfit-600 dark:text-apexfit-400 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Training
          </Link>

          <h1 className="text-2xl font-bold mb-8 dark:text-white">Book a Training Session</h1>

          <Card className="rounded-2xl max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Schedule Your Session at {selectedBranch.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Trainer Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Trainer</label>
                <Select value={selectedTrainer} onValueChange={setSelectedTrainer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a trainer" />
                  </SelectTrigger>
                  <SelectContent>
                    {trainers.map((trainer) => (
                      <SelectItem key={trainer.id} value={trainer.id}>
                        {trainer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex justify-end mt-1">
                  <Link 
                    to={selectedTrainer ? `/trainer/${selectedTrainer}` : '#'} 
                    className={`text-sm text-apexfit-600 dark:text-apexfit-400 hover:underline ${!selectedTrainer && 'pointer-events-none opacity-50'}`}
                  >
                    View trainer profile
                  </Link>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Date</label>
                <Select value={selectedDate} onValueChange={setSelectedDate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a date" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableDates.map((date) => (
                      <SelectItem key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Time</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Booking Button */}
              <Button 
                onClick={handleBookSession} 
                className="w-full mt-6"
                disabled={!selectedTrainer || !selectedDate || !selectedTime}
              >
                Confirm Booking
              </Button>
            </CardContent>
          </Card>
          
          {/* Comment indicating where real API calls would be */}
          {/* In production:
           * - useQuery to fetch available trainers from Supabase
           * - useQuery to fetch available dates based on trainer selection
           * - useQuery to fetch available time slots based on date selection
           * - useMutation to create the booking
           */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
