
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © 2025 ApexFit. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-apexfit-600 text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-apexfit-600 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-apexfit-600 text-sm">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
