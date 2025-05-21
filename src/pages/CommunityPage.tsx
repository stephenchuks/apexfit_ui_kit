
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CommunityPage = () => {
  // Static placeholder data
  const upcomingEvents = [
    { title: "Saturday Morning Run Club", date: "May 24, 2025", time: "8:00 AM", location: "Central Park", participants: 12 },
    { title: "HIIT Challenge", date: "May 26, 2025", time: "6:30 PM", location: "Main Gym Floor", participants: 8 },
    { title: "Yoga for Athletes", date: "May 29, 2025", time: "7:00 PM", location: "Studio 3", participants: 15 }
  ];
  
  const featuredMembers = [
    { name: "Alex Wang", achievement: "Lost 30 lbs in 3 months", quote: "The community here kept me accountable." },
    { name: "Maria Rodriguez", achievement: "Completed first marathon", quote: "Couldn't have done it without my training group." },
    { name: "Jamal Brown", achievement: "Increased deadlift by 100 lbs", quote: "The trainers here pushed me to new heights." }
  ];
  
  const discussions = [
    { topic: "Best pre-workout meals?", replies: 24, lastActive: "2 hours ago" },
    { topic: "Recovery tips after leg day", replies: 18, lastActive: "Yesterday" },
    { topic: "Looking for a running buddy", replies: 7, lastActive: "3 days ago" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">ApexFit Community</h1>
          
          {/* Community Stats */}
          <section className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="rounded-xl text-center p-6">
                <p className="text-3xl font-bold text-apexfit-600">1,246</p>
                <p className="text-gray-500">Active Members</p>
              </Card>
              <Card className="rounded-xl text-center p-6">
                <p className="text-3xl font-bold text-apexfit-600">32</p>
                <p className="text-gray-500">Weekly Classes</p>
              </Card>
              <Card className="rounded-xl text-center p-6">
                <p className="text-3xl font-bold text-apexfit-600">15</p>
                <p className="text-gray-500">Community Events</p>
              </Card>
            </div>
          </section>
          
          {/* Upcoming Events */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      <span className="block text-gray-500">Date & Time:</span>
                      {event.date} at {event.time}
                    </p>
                    <p className="mb-4">
                      <span className="block text-gray-500">Location:</span>
                      {event.location}
                    </p>
                    <p className="mb-4">
                      <span className="block text-gray-500">Participants:</span>
                      {event.participants} attending
                    </p>
                    <Button className="w-full bg-apexfit-600 hover:bg-apexfit-700">
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Featured Success Stories */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredMembers.map((member, index) => (
                <Card key={index} className="rounded-xl">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar placeholder */}
                      <div className="h-16 w-16 rounded-full bg-apexfit-100 flex items-center justify-center mb-4">
                        <span className="text-lg font-bold text-apexfit-600">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="font-medium text-lg mb-1">{member.name}</h3>
                      <p className="text-apexfit-600 mb-4">{member.achievement}</p>
                      <p className="italic text-gray-600">"{member.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Community Discussions */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Discussion Forum</h2>
              <Button className="bg-apexfit-600 hover:bg-apexfit-700">New Topic</Button>
            </div>
            <Card className="rounded-xl">
              <CardContent className="p-0">
                <ul>
                  {discussions.map((discussion, index) => (
                    <li key={index} className={`p-4 ${index !== discussions.length - 1 ? 'border-b' : ''}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="font-medium">{discussion.topic}</h3>
                          <p className="text-sm text-gray-500">{discussion.replies} replies • {discussion.lastActive}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Thread
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
