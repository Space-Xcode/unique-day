
import React from 'react';
import DashboardLayout from '@/components/dashboard/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { BarChart4, LineChart as LineChartIcon, PieChart as PieChartIcon, Activity } from 'lucide-react';

const Analytics = () => {
  // Sample data for various charts
  const monthlyData = [
    { name: 'Jan', users: 4000, revenue: 2400, expenses: 1800 },
    { name: 'Feb', users: 3000, revenue: 1398, expenses: 1200 },
    { name: 'Mar', users: 5000, revenue: 3800, expenses: 2800 },
    { name: 'Apr', users: 2780, revenue: 3908, expenses: 2500 },
    { name: 'May', users: 1890, revenue: 4800, expenses: 2300 },
    { name: 'Jun', users: 2390, revenue: 3800, expenses: 1800 },
    { name: 'Jul', users: 3490, revenue: 4300, expenses: 2100 },
    { name: 'Aug', users: 4000, revenue: 2400, expenses: 1800 },
    { name: 'Sep', users: 3000, revenue: 1398, expenses: 1200 },
    { name: 'Oct', users: 2000, revenue: 9800, expenses: 2800 },
    { name: 'Nov', users: 2780, revenue: 3908, expenses: 2500 },
    { name: 'Dec', users: 1890, revenue: 4800, expenses: 2300 },
  ];

  const weeklyData = [
    { name: 'Mon', visits: 4000, conversions: 2400 },
    { name: 'Tue', visits: 3000, conversions: 1398 },
    { name: 'Wed', visits: 2000, conversions: 9800 },
    { name: 'Thu', visits: 2780, conversions: 3908 },
    { name: 'Fri', visits: 1890, conversions: 4800 },
    { name: 'Sat', visits: 2390, conversions: 3800 },
    { name: 'Sun', visits: 3490, conversions: 4300 },
  ];

  const userSourceData = [
    { name: 'Direct', value: 400 },
    { name: 'Social', value: 300 },
    { name: 'Email', value: 300 },
    { name: 'Ads', value: 200 },
    { name: 'Other', value: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Analytics</h1>
          <div className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Activity className="w-4 h-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <BarChart4 className="w-4 h-4" /> Users
            </TabsTrigger>
            <TabsTrigger value="revenue" className="flex items-center gap-2">
              <LineChartIcon className="w-4 h-4" /> Revenue
            </TabsTrigger>
            <TabsTrigger value="sources" className="flex items-center gap-2">
              <PieChartIcon className="w-4 h-4" /> Sources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Monthly Users</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ChartContainer
                    config={{
                      users: { color: "#4F46E5" },
                    }}
                  >
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="users" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.6} />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Revenue vs Expenses</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ChartContainer
                    config={{
                      revenue: { color: "#10B981" },
                      expenses: { color: "#F43F5E" },
                    }}
                  >
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#10B981" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="expenses" stroke="#F43F5E" />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Weekly Performance</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ChartContainer
                  config={{
                    visits: { color: "#8B5CF6" },
                    conversions: { color: "#EC4899" },
                  }}
                >
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="visits" fill="#8B5CF6" />
                    <Bar dataKey="conversions" fill="#EC4899" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">User Growth</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ChartContainer
                  config={{
                    users: { color: "#4F46E5" },
                  }}
                >
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="users" stroke="#4F46E5" activeDot={{ r: 8 }} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Revenue Trends</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ChartContainer
                  config={{
                    revenue: { color: "#10B981" },
                  }}
                >
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">User Acquisition</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={userSourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {userSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Source Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    {userSourceData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2" 
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          />
                          <span>{item.name}</span>
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
