
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const UpsellBanner = () => {
  return (
    <Card className="bg-gradient-to-r from-apexfit-600/20 to-apexfit-500/20 mb-6 rounded-2xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
        <div className="mb-3 md:mb-0">
          <h3 className="text-lg font-medium text-apexfit-700 dark:text-apexfit-200">
            Upgrade to Gym + App for $29.99/mo more
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Get unlimited access to all gym locations and premium features
          </p>
        </div>
        <Link 
          to="/subscription" 
          className="flex items-center text-apexfit-600 dark:text-apexfit-400 font-medium hover:underline"
        >
          View Plans <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
};

export default UpsellBanner;
