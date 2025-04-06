
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { ChevronDown, FileText, Download, FileChartPie, ChartPie, ChartBar } from 'lucide-react';
import { format } from 'date-fns';

const Reports = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const reportsList = [
    { 
      id: 1, 
      name: 'Monthly Performance Summary', 
      type: 'PDF', 
      date: 'Apr 1, 2025', 
      icon: FileText 
    },
    { 
      id: 2, 
      name: 'Q1 Sales Report', 
      type: 'Excel', 
      date: 'Mar 31, 2025', 
      icon: FileChartPie 
    },
    { 
      id: 3, 
      name: 'Customer Acquisition Report', 
      type: 'PDF', 
      date: 'Mar 15, 2025', 
      icon: FileText 
    },
    { 
      id: 4, 
      name: 'Marketing Campaign Analysis', 
      type: 'PDF', 
      date: 'Mar 10, 2025', 
      icon: FileChartPie 
    },
    { 
      id: 5, 
      name: 'Product Performance Metrics', 
      type: 'Excel', 
      date: 'Mar 5, 2025', 
      icon: FileChartPie 
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {date ? format(date, 'PPP') : 'Select date'}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Reports</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {reportsList.map((report) => (
                  <div key={report.id} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded">
                        <report.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{report.name}</h3>
                        <p className="text-sm text-muted-foreground">{report.type} • {report.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartPie className="h-5 w-5" />
                  Report Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Pie chart visualization would go here
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartBar className="h-5 w-5" />
                  Report Generation Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Bar chart visualization would go here
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                Financial Reports Content
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                Performance Reports Content
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="marketing" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                Marketing Reports Content
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Reports;
