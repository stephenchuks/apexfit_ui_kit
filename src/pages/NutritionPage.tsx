
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const NutritionPage = () => {
  // Static placeholder data
  const mealPlan = [
    { meal: 'Breakfast', food: 'Greek yogurt with berries and granola', calories: 320, protein: '22g', carbs: '36g', fat: '10g' },
    { meal: 'Snack', food: 'Apple and almond butter', calories: 220, protein: '6g', carbs: '24g', fat: '12g' },
    { meal: 'Lunch', food: 'Grilled chicken salad with avocado', calories: 450, protein: '35g', carbs: '18g', fat: '27g' },
    { meal: 'Snack', food: 'Protein shake', calories: 180, protein: '25g', carbs: '12g', fat: '3g' },
    { meal: 'Dinner', food: 'Salmon with quinoa and roasted vegetables', calories: 520, protein: '38g', carbs: '42g', fat: '22g' }
  ];
  
  const nutritionTips = [
    'Aim to consume 0.8-1g of protein per pound of body weight for muscle recovery',
    'Stay hydrated by drinking at least 8 glasses of water daily',
    'Time your carbohydrates around your workouts for optimal energy',
    'Include healthy fats for hormone production and joint health',
    'Eat a variety of colorful vegetables to get different micronutrients'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">Nutrition Plan</h1>
          
          {/* Daily Summary Card */}
          <section className="mb-8">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>Daily Nutrition Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Target Calories</p>
                    <p className="text-2xl font-bold">1,850</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Protein</p>
                    <p className="text-2xl font-bold">140g</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Carbs</p>
                    <p className="text-2xl font-bold">185g</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Fat</p>
                    <p className="text-2xl font-bold">60g</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Sample Meal Plan */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Sample Meal Plan</h2>
            <Card className="rounded-xl">
              {/* Mobile view: Cards */}
              <div className="md:hidden">
                {mealPlan.map((meal, index) => (
                  <div key={index} className={`p-4 ${index !== mealPlan.length - 1 ? 'border-b' : ''}`}>
                    <h3 className="font-medium text-lg">{meal.meal}</h3>
                    <p className="mb-2">{meal.food}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Calories:</span> {meal.calories}
                      </div>
                      <div>
                        <span className="text-gray-500">Protein:</span> {meal.protein}
                      </div>
                      <div>
                        <span className="text-gray-500">Carbs:</span> {meal.carbs}
                      </div>
                      <div>
                        <span className="text-gray-500">Fat:</span> {meal.fat}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Desktop view: Table */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Meal</TableHead>
                      <TableHead>Food</TableHead>
                      <TableHead>Calories</TableHead>
                      <TableHead>Protein</TableHead>
                      <TableHead>Carbs</TableHead>
                      <TableHead>Fat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mealPlan.map((meal, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{meal.meal}</TableCell>
                        <TableCell>{meal.food}</TableCell>
                        <TableCell>{meal.calories}</TableCell>
                        <TableCell>{meal.protein}</TableCell>
                        <TableCell>{meal.carbs}</TableCell>
                        <TableCell>{meal.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </section>
          
          {/* Nutrition Tips */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Nutrition Tips</h2>
            <Card className="rounded-xl">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {nutritionTips.map((tip, index) => (
                    <li key={index} className="flex">
                      <div className="h-6 w-6 rounded-full bg-apexfit-100 text-apexfit-600 flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p>{tip}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
          
          {/* Placeholder for future features */}
          <p className="text-center text-gray-500 text-sm italic mt-8">
            {/* This would connect to a nutrition tracking API in a real app */}
            Customized meal plans and tracking coming soon!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NutritionPage;
