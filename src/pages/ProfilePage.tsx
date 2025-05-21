
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProfilePage = () => {
  // Static user data - would come from authentication/database
  const user = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    memberSince: 'January 2025',
    plan: 'Premium',
    goals: ['Build muscle', 'Improve endurance', 'Reduce stress']
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Info Card */}
            <Card className="rounded-xl md:col-span-1">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {/* Avatar placeholder - would be user image in real app */}
                  <div className="h-24 w-24 rounded-full bg-apexfit-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-apexfit-600">JS</span>
                  </div>
                </div>
                <CardTitle>{user.name}</CardTitle>
                <p className="text-gray-500">{user.email}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p>{user.memberSince}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Membership Plan</p>
                    <p>{user.plan}</p>
                  </div>
                  <Button className="bg-apexfit-600 hover:bg-apexfit-700 w-full">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Fitness Goals & Preferences */}
            <Card className="rounded-xl md:col-span-2">
              <CardHeader>
                <CardTitle>Fitness Goals & Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Your Goals</h3>
                  <ul className="space-y-2">
                    {user.goals.map((goal, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-apexfit-500 mr-2"></div>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Preferences</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Preferred Workout Time</p>
                      <p>Evening</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Workout Duration</p>
                      <p>45-60 minutes</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience Level</p>
                      <p>Intermediate</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Preferred Workout Type</p>
                      <p>Strength Training</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Account Settings Card */}
            <Card className="rounded-xl md:col-span-3">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
                  <Button variant="outline">Change Password</Button>
                  <Button variant="outline">Notification Preferences</Button>
                  <Button variant="outline">Privacy Settings</Button>
                  <Button variant="outline" className="text-red-500 hover:text-red-600">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
