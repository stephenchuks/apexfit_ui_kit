
import Header from '@/components/Header';
import WelcomeBanner from '@/components/WelcomeBanner';
import UpsellBanner from '@/components/UpsellBanner';
import SummaryGrid from '@/components/SummaryGrid';
import AnalyticsSection from '@/components/AnalyticsSection';
import RecentWorkouts from '@/components/RecentWorkouts';
import StreakTracker from '@/components/StreakTracker';
import MiniBadges from '@/components/MiniBadges';
import Footer from '@/components/Footer';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-8">
            {/* Upsell Banner */}
            <UpsellBanner />
            
            <WelcomeBanner />
            
            {/* Streak Tracker */}
            <section aria-labelledby="streak-heading" className="pt-2">
              <h2 id="streak-heading" className="sr-only">Workout Streak</h2>
              <StreakTracker />
            </section>
            
            <section aria-labelledby="summary-heading">
              <h2 id="summary-heading" className="sr-only">Performance Summary</h2>
              <SummaryGrid />
            </section>

            <section aria-labelledby="analytics-heading" className="pt-4">
              <h2 id="analytics-heading" className="text-xl font-semibold mb-6 dark:text-white">Your Progress</h2>
              <AnalyticsSection />
            </section>
            
            {/* Mini Badges Section */}
            <section aria-labelledby="badges-heading" className="pt-4">
              <h2 id="badges-heading" className="sr-only">Your Badges</h2>
              <MiniBadges />
            </section>

            <section aria-labelledby="recent-workouts-heading" className="pt-4">
              <h2 id="recent-workouts-heading" className="text-xl font-semibold mb-6 dark:text-white">Recent Workouts</h2>
              <RecentWorkouts />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
