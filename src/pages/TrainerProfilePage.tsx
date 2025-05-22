
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Calendar } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const TrainerProfilePage = () => {
  // Get the trainer ID from URL params
  const { id } = useParams<{ id: string }>();

  // Static trainer data - in a real app this would be fetched based on the ID
  // This is just mock data for the UI
  const trainers = {
    '101': {
      name: 'Alex Johnson',
      specialty: 'Strength & Conditioning',
      rating: 4.9,
      reviews: 124,
      bio: "Alex specializes in strength training and powerlifting. With 8+ years of experience, they've helped clients reach their strength goals while maintaining proper form and preventing injuries.",
      certifications: ['NASM Certified Personal Trainer', 'Strength & Conditioning Specialist', 'TRX Certified Trainer'],
      photoUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=300'
    },
    '102': {
      name: 'Sarah Williams',
      specialty: 'Yoga & Flexibility',
      rating: 4.8,
      reviews: 98,
      bio: 'Sarah is an experienced yoga instructor who focuses on improving flexibility, balance, and mental wellness. Her sessions blend traditional yoga with modern mobility techniques.',
      certifications: ['200hr Yoga Alliance Certified', 'Mobility Specialist', 'Meditation Coach'],
      photoUrl: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?auto=format&fit=crop&w=300'
    },
    '103': {
      name: 'Mike Davis',
      specialty: 'HIIT & Functional Training',
      rating: 4.7,
      reviews: 87,
      bio: 'Mike specializes in high-intensity interval training and functional movement patterns. His energetic sessions are designed to boost cardio endurance and overall fitness.',
      certifications: ['ACE Certified Personal Trainer', 'HIIT Specialist', 'Functional Movement Specialist'],
      photoUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=300'
    },
    '104': {
      name: 'Emily Chen',
      specialty: 'Pilates & Core Strength',
      rating: 4.9,
      reviews: 112,
      bio: 'Emily is a Pilates expert focused on core strength, posture correction, and rehabilitation. Her detailed approach helps clients build a strong foundation for all other fitness activities.',
      certifications: ['Comprehensive Pilates Certification', 'Corrective Exercise Specialist', 'Pre/Post Natal Fitness'],
      photoUrl: 'https://images.unsplash.com/photo-1614660659505-c808d1ea8749?auto=format&fit=crop&w=300'
    }
  };

  // Get the trainer data based on the ID parameter
  const trainer = trainers[id as keyof typeof trainers];

  // If trainer not found, show error
  if (!trainer) {
    return (
      <div className="min-h-screen flex flex-col bg-background dark:bg-gray-950">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Card className="rounded-2xl p-8 max-w-md mx-auto text-center">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Trainer Not Found</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Sorry, we couldn't find information for this trainer.
            </p>
            <Link to="/training">
              <Button variant="default">Back to Training</Button>
            </Link>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Link to="/training" className="flex items-center text-apexfit-600 dark:text-apexfit-400 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Training
          </Link>

          <Card className="rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-6">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src={trainer.photoUrl} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <CardHeader className="p-0 mb-4">
                  <h1 className="text-2xl font-bold dark:text-white">{trainer.name}</h1>
                  <div className="text-lg text-apexfit-600 dark:text-apexfit-400 mb-2">
                    {trainer.specialty}
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(trainer.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">
                      {trainer.rating} ({trainer.reviews} reviews)
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="px-0">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 dark:text-white">About</h3>
                    <p className="text-gray-700 dark:text-gray-300">{trainer.bio}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 dark:text-white">Certifications</h3>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                      {trainer.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/training/book" className="w-full sm:w-auto">
                    <Button className="flex items-center w-full sm:w-auto">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Session
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
          
          {/* Comment indicating where a real API call would be */}
          {/* In production: useQuery to fetch trainer details from Supabase based on id param */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainerProfilePage;
