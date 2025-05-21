
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsSection from '@/components/AnalyticsSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgressPage = () => {
  // Static data for KPIs
  const kpis = [
    { title: "Workouts Completed", value: "24", change: "+6", period: "vs. last month" },
    { title: "Avg. Workout Duration", value: "45 min", change: "+3 min", period: "vs. last month" },
    { title: "Personal Records", value: "3", change: "+1", period: "this month" },
    { title: "Consistency Score", value: "92%", change: "+5%", period: "vs. last month" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">Your Progress</h1>
          
          {/* KPI Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="rounded-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">{kpi.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">{kpi.value}</p>
                    <p className={`text-sm ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {kpi.change} {kpi.period}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
          
          {/* Charts Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-6">Analytics</h2>
            <AnalyticsSection />
          </section>
          
          {/* Additional metrics could go here in a real app */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Body Metrics</h2>
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg">Body Metrics History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 italic">
                  {/* Placeholder for future metrics tracking */}
                  This section would display body composition metrics like body fat percentage, 
                  muscle mass, and other measurements tracked over time.
                  
                  {/* This would fetch from Supabase in a real app */}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgressPage;
