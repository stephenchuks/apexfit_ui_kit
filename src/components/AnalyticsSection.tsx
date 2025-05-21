
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Bar, ResponsiveContainer } from 'recharts';

const AnalyticsSection = () => {
  // Static placeholder data for weight trend
  const weightData = [
    { month: 'Jan', weight: 180 },
    { month: 'Feb', weight: 182 },
    { month: 'Mar', weight: 181 },
    { month: 'Apr', weight: 183 },
    { month: 'May', weight: 182 },
    { month: 'Jun', weight: 180 },
  ];

  // Static placeholder data for workouts per week
  const workoutData = [
    { week: 'Week 1', workouts: 3 },
    { week: 'Week 2', workouts: 4 },
    { week: 'Week 3', workouts: 2 },
    { week: 'Week 4', workouts: 5 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Weight Trend Chart */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Weight Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weightData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="weight" 
                name="Weight (lb)" 
                stroke="#0d9488" 
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Workouts This Month Chart */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Workouts This Month</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={workoutData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="workouts" 
                name="Workouts per Week" 
                fill="#0d9488" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsSection;
