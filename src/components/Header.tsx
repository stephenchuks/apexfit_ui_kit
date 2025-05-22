
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Building } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useBranch } from '@/contexts/BranchContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Centralized navigation items
export const navItems = [
  { title: 'Dashboard', path: '/', icon: 'dashboard' },
  { title: 'Workouts', path: '/workouts', icon: 'workouts' },
  { title: 'Progress', path: '/progress', icon: 'progress' },
  { title: 'Training', path: '/training', icon: 'training' },
  { title: 'Profile', path: '/profile', icon: 'profile' },
  { title: 'Nutrition', path: '/nutrition', icon: 'nutrition' },
  { title: 'Community', path: '/community', icon: 'community' },
  { title: 'Achievements', path: '/achievements', icon: 'achievements' },
  { title: 'Subscription', path: '/subscription', icon: 'subscription' }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { selectedBranch, branches, setSelectedBranch } = useBranch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl md:text-2xl font-bold text-apexfit-600 dark:text-apexfit-400">
            ApexFit
          </Link>
          
          {/* Branch Selector */}
          <Select 
            onValueChange={(value) => {
              const branch = branches.find(b => b.id === value);
              if (branch) setSelectedBranch(branch);
            }}
            defaultValue={selectedBranch.id}
          >
            <SelectTrigger className="w-[180px] h-9">
              <div className="flex items-center">
                <Building className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select Branch" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {branches.map((branch) => (
                <SelectItem key={branch.id} value={branch.id}>
                  {branch.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.title}
              to={item.path}
              className={({ isActive }) => 
                isActive 
                  ? "text-apexfit-600 dark:text-apexfit-400 font-medium" 
                  : "text-gray-600 dark:text-gray-300 hover:text-apexfit-600 dark:hover:text-apexfit-400 transition-colors"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-4 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    isActive
                      ? "block py-2 px-4 text-apexfit-600 dark:text-apexfit-400 font-medium"
                      : "block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-apexfit-600 dark:hover:text-apexfit-400 transition-colors"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
