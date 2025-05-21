
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BadgeGallery from './BadgeGallery';

const MiniBadges = () => {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Your Badges</CardTitle>
          <Link 
            to="/achievements"
            className="text-apexfit-600 dark:text-apexfit-400 flex items-center hover:underline text-sm font-medium"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <BadgeGallery limit={3} showUnlocked={false} compact={true} />
      </CardContent>
    </Card>
  );
};

export default MiniBadges;
