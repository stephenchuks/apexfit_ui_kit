
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SubscriptionPage = () => {
  // Static plan data that would come from a backend in production
  const plans = [
    {
      id: 'app-only',
      name: 'App-Only',
      price: 9.99,
      isActive: true,
      features: [
        'Workout tracking',
        'Progress analytics',
        'Custom workout plans',
        'Nutrition tracking basics',
        'Community access'
      ]
    },
    {
      id: 'gym-app',
      name: 'Gym + App',
      price: 39.99,
      isActive: false,
      features: [
        'Everything in App-Only',
        'Unlimited gym access',
        'Group fitness classes',
        'Locker rental',
        'Advanced nutrition planning'
      ]
    },
    {
      id: 'premium',
      name: 'Premium PT Bundle',
      price: 99.99,
      isActive: false,
      features: [
        'Everything in Gym + App',
        '2 PT sessions per month',
        'Body composition analysis',
        'Custom meal planning',
        'Priority booking'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2 dark:text-white">Choose Your Membership Plan</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select the membership plan that works best for you. Change or cancel your plan anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`rounded-2xl ${
                  plan.isActive 
                    ? 'border-apexfit-500 dark:border-apexfit-400 border-2' 
                    : 'border'
                }`}
              >
                {plan.isActive && (
                  <div className="bg-apexfit-500 text-white text-center py-1 text-sm font-medium">
                    Current Plan
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    ${plan.price}<span className="text-sm font-normal text-gray-500">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/billing" className="w-full">
                    <Button 
                      variant={plan.isActive ? "outline" : "default"} 
                      className="w-full"
                    >
                      {plan.isActive ? 'Manage Plan' : 'Subscribe'}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Comment indicating where a real API call would be */}
          {/* In production: useQuery to fetch current subscription and available plans from Supabase */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubscriptionPage;
