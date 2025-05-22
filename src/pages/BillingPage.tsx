
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BillingPage = () => {
  // Static invoice data that would come from a backend in production
  const invoices = [
    { id: 'INV-001', date: '2025-05-01', amount: 9.99, status: 'Paid' },
    { id: 'INV-002', date: '2025-04-01', amount: 9.99, status: 'Paid' },
    { id: 'INV-003', date: '2025-03-01', amount: 9.99, status: 'Paid' },
    { id: 'INV-004', date: '2025-02-01', amount: 9.99, status: 'Paid' },
    { id: 'INV-005', date: '2025-01-01', amount: 9.99, status: 'Paid' },
  ];

  // Static payment method data
  const paymentMethod = {
    type: 'Visa',
    last4: '1234',
    expMonth: 12,
    expYear: 2026
  };

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Link to="/subscription" className="flex items-center text-apexfit-600 dark:text-apexfit-400 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Subscription
          </Link>

          <h1 className="text-2xl font-bold mb-8 dark:text-white">Billing & Payment</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment Method Card */}
            <div className="md:col-span-1">
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-medium">{paymentMethod.type} •••• {paymentMethod.last4}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Expires {paymentMethod.expMonth}/{paymentMethod.expYear}
                    </div>
                  </div>
                  <Button className="w-full">Update Payment Method</Button>
                </CardContent>
              </Card>
            </div>

            {/* Invoices Card */}
            <div className="md:col-span-2">
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>View your past invoices and payment history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b dark:border-gray-700">
                          <th className="pb-2 font-semibold">Invoice</th>
                          <th className="pb-2 font-semibold">Date</th>
                          <th className="pb-2 font-semibold">Amount</th>
                          <th className="pb-2 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoices.map((invoice) => (
                          <tr key={invoice.id} className="border-b dark:border-gray-700">
                            <td className="py-3">{invoice.id}</td>
                            <td className="py-3">{new Date(invoice.date).toLocaleDateString()}</td>
                            <td className="py-3">${invoice.amount.toFixed(2)}</td>
                            <td className="py-3">
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {invoice.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Comment indicating where real API calls would be */}
          {/* In production: useQuery to fetch payment methods and invoices from Supabase */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BillingPage;
