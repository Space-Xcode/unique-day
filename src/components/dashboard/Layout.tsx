
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-dashboard-background">
      {/* Mobile sidebar */}
      {isMobile && showMobileSidebar && (
        <div className="fixed inset-0 z-50 flex">
          <div className="relative flex-1">
            <Sidebar className="w-full absolute inset-0" />
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowMobileSidebar(false)}
            ></div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      {!isMobile && <Sidebar />}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center px-4 border-b border-dashboard-border bg-white dark:bg-black">
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-4"
              onClick={() => setShowMobileSidebar(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
