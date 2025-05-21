
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import BadgeGallery, { badges } from '@/components/BadgeGallery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AchievementsPage = () => {
  // Count earned badges
  const earnedCount = badges.filter(badge => badge.earned).length;
  const totalCount = badges.length;
  
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-6">
            {/* Page Title */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1">Your Achievements</h1>
                <p className="text-muted-foreground">Keep up the good work to unlock more badges</p>
              </div>
              
              <Badge variant="secondary" className="mt-2 md:mt-0 w-fit text-sm py-1 px-3">
                {earnedCount}/{totalCount} Badges Earned
              </Badge>
            </div>
            
            {/* Earned Badges */}
            <Card className="rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">Earned Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <BadgeGallery showUnlocked={false} />
              </CardContent>
            </Card>
            
            {/* Locked Badges */}
            <Card className="rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">Badges to Unlock</CardTitle>
              </CardHeader>
              <CardContent>
                <BadgeGallery showUnlocked={true} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AchievementsPage;
