
import { Card } from '@/components/ui/card';

const WelcomeBanner = () => {
  return (
    <Card className="bg-gradient-to-r from-apexfit-700 to-apexfit-600 text-white p-6 rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-3 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold">Welcome back, Jane!</h2>
          <p className="mt-2 text-apexfit-100">Let's crush today's workout.</p>
        </div>
        <div className="mt-4 md:mt-0">
          {/* This could be a profile picture or a motivation component */}
        </div>
      </div>
    </Card>
  );
};

export default WelcomeBanner;
