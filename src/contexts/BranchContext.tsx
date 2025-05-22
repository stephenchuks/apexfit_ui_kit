
import { createContext, useContext, useState, ReactNode } from 'react';

type Branch = {
  id: string;
  name: string;
  address: string;
};

interface BranchContextType {
  selectedBranch: Branch;
  branches: Branch[];
  setSelectedBranch: (branch: Branch) => void;
}

const defaultBranches: Branch[] = [
  { id: '1', name: 'Uptown', address: '123 Main St, City' },
  { id: '2', name: 'Downtown', address: '456 Park Ave, City' },
];

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export const BranchProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(defaultBranches[0]);
  const [branches] = useState<Branch[]>(defaultBranches);

  return (
    <BranchContext.Provider value={{ selectedBranch, branches, setSelectedBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

export const useBranch = (): BranchContextType => {
  const context = useContext(BranchContext);
  if (context === undefined) {
    throw new Error('useBranch must be used within a BranchProvider');
  }
  return context;
};
