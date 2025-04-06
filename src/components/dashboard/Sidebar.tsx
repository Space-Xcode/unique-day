
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  BarChart, 
  Users, 
  Settings, 
  Mail, 
  Bell, 
  Calendar, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  PieChart,
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
  path?: string;
}

const NavItem = ({ icon: Icon, label, active, collapsed, onClick, path }: NavItemProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      navigate(path);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start gap-3 px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        active && 'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground'
      )}
      onClick={handleClick}
    >
      <Icon className="h-5 w-5" />
      {!collapsed && <span>{label}</span>}
    </Button>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Always show expanded sidebar on mobile
  const isCollapsed = isMobile ? false : collapsed;

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Analytics', icon: PieChart, path: '/analytics' },
    { label: 'Reports', icon: BarChart, path: '#' },
    { label: 'Customers', icon: Users, path: '#' },
    { label: 'Messages', icon: Mail, path: '#' },
    { label: 'Notifications', icon: Bell, path: '#' },
    { label: 'Calendar', icon: Calendar, path: '#' },
    { label: 'Settings', icon: Settings, path: '#' },
  ];

  return (
    <div className={cn(
      "flex flex-col bg-sidebar h-screen transition-all duration-300 border-r border-dashboard-border bg-sidebar",
      isCollapsed ? "w-[80px]" : "w-[240px]",
      isMobile && "w-full",
      className
    )}>
      <div className="flex items-center justify-between p-4 border-b border-dashboard-border">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-sidebar-foreground">Insight</h1>
        )}
        {!isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        )}
      </div>

      <div className="flex-1 py-4 overflow-y-auto scrollbar-hide">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.path}
              collapsed={isCollapsed}
              path={item.path}
            />
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-dashboard-border">
        <NavItem 
          icon={LogOut} 
          label="Log Out" 
          collapsed={isCollapsed} 
        />
      </div>
    </div>
  );
};

export default Sidebar;
