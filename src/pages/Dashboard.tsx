
import React from 'react';
import DashboardLayout from '@/components/dashboard/Layout';
import StatCard from '@/components/dashboard/StatCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import AreaChart from '@/components/dashboard/AreaChart';
import BarChartComponent from '@/components/dashboard/BarChartComponent';
import QuickActions from '@/components/dashboard/QuickActions';
import { 
  Users, 
  DollarSign, 
  Activity, 
  ShoppingCart,
  PlusCircle, 
  FileText, 
  UserPlus, 
  Download
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const { toast } = useToast();

  const handleActionClick = (action: string) => {
    toast({
      title: 'Action triggered',
      description: `You clicked on ${action}`,
    });
  };

  // Sample data for charts
  const areaChartData = [
    { name: 'Jan', revenue: 4000, users: 2400, purchases: 1400 },
    { name: 'Feb', revenue: 3000, users: 1398, purchases: 2210 },
    { name: 'Mar', revenue: 2000, users: 9800, purchases: 2290 },
    { name: 'Apr', revenue: 2780, users: 3908, purchases: 2000 },
    { name: 'May', revenue: 1890, users: 4800, purchases: 2181 },
    { name: 'Jun', revenue: 2390, users: 3800, purchases: 2500 },
    { name: 'Jul', revenue: 3490, users: 4300, purchases: 2100 },
  ];

  const barChartData = [
    { name: 'Mo', sales: 24 },
    { name: 'Tu', sales: 13 },
    { name: 'We', sales: 98 },
    { name: 'Th', sales: 39 },
    { name: 'Fr', sales: 48 },
    { name: 'Sa', sales: 38 },
    { name: 'Su', sales: 43 },
  ];

  // Sample data for recent activities
  const recentActivities = [
    {
      id: '1',
      user: {
        name: 'Sarah Johnson',
        initials: 'SJ',
      },
      action: 'created a new project',
      target: 'Website Redesign',
      time: '2 hours ago',
    },
    {
      id: '2',
      user: {
        name: 'Michael Chen',
        initials: 'MC',
      },
      action: 'commented on',
      target: 'Q1 Sales Report',
      time: '5 hours ago',
    },
    {
      id: '3',
      user: {
        name: 'Alex Kim',
        initials: 'AK',
      },
      action: 'completed task',
      target: 'Update Documentation',
      time: 'Yesterday at 16:45',
    },
    {
      id: '4',
      user: {
        name: 'Jessica Lee',
        initials: 'JL',
      },
      action: 'added files to',
      target: 'Marketing Campaign',
      time: 'Yesterday at 14:30',
    }
  ];

  // Quick actions
  const quickActions = [
    {
      label: 'New Project',
      icon: PlusCircle,
      onClick: () => handleActionClick('New Project'),
      variant: 'default' as const,
    },
    {
      label: 'Create Report',
      icon: FileText,
      onClick: () => handleActionClick('Create Report'),
      variant: 'outline' as const,
    },
    {
      label: 'Add User',
      icon: UserPlus,
      onClick: () => handleActionClick('Add User'),
      variant: 'outline' as const,
    },
    {
      label: 'Download Data',
      icon: Download,
      onClick: () => handleActionClick('Download Data'),
      variant: 'outline' as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Users"
          value="15,243"
          icon={<Users className="h-4 w-4" />}
          description="since last month"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Revenue"
          value="$45,231"
          icon={<DollarSign className="h-4 w-4" />}
          description="since last month"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Now"
          value="573"
          icon={<Activity className="h-4 w-4" />}
          description="users online"
        />
        <StatCard
          title="Sales"
          value="1,423"
          icon={<ShoppingCart className="h-4 w-4" />}
          description="since last week"
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <AreaChart
          title="Performance Overview"
          data={areaChartData}
          dataKeys={['revenue', 'users', 'purchases']}
          colors={['#4F46E5', '#8B5CF6', '#10B981']}
        />
        <BarChartComponent
          title="Weekly Sales"
          data={barChartData}
          dataKey="sales"
          color="#4F46E5"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentActivity activities={recentActivities} />
        <div className="lg:col-span-2">
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
