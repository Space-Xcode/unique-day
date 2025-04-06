
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/Layout';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  Search, 
  Download, 
  Filter, 
  MoreHorizontal, 
  UserCog
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

// Mock customer data
const customers = [
  { 
    id: 1, 
    name: 'Jane Cooper', 
    email: 'jane.cooper@example.com', 
    status: 'Active', 
    lastOrder: '2023-03-15', 
    spent: '$1,230.00' 
  },
  { 
    id: 2, 
    name: 'Wade Warren', 
    email: 'wade.warren@example.com', 
    status: 'Inactive', 
    lastOrder: '2023-01-20', 
    spent: '$750.50' 
  },
  { 
    id: 3, 
    name: 'Esther Howard', 
    email: 'esther.howard@example.com', 
    status: 'Active', 
    lastOrder: '2023-03-28', 
    spent: '$2,310.75' 
  },
  { 
    id: 4, 
    name: 'Cameron Williamson', 
    email: 'cameron.williamson@example.com', 
    status: 'Active', 
    lastOrder: '2023-02-14', 
    spent: '$890.25' 
  },
  { 
    id: 5, 
    name: 'Brooklyn Simmons', 
    email: 'brooklyn.simmons@example.com', 
    status: 'Inactive', 
    lastOrder: '2022-11-30', 
    spent: '$435.00' 
  },
  { 
    id: 6, 
    name: 'Leslie Alexander', 
    email: 'leslie.alexander@example.com', 
    status: 'Active', 
    lastOrder: '2023-03-05', 
    spent: '$1,875.50' 
  },
  { 
    id: 7, 
    name: 'Jenny Wilson', 
    email: 'jenny.wilson@example.com', 
    status: 'Active', 
    lastOrder: '2023-03-18', 
    spent: '$632.40' 
  }
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Customers</h1>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>

        {/* Customer Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customers.length}</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customers.filter(c => c.status === 'Active').length}</div>
              <p className="text-xs text-muted-foreground mt-1">+5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,245.80</div>
              <p className="text-xs text-muted-foreground mt-1">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and filter controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Customers table */}
        <Card>
          <Table>
            <TableCaption>A list of all customers.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={customer.status === 'Active' ? 'default' : 'secondary'}
                      className={customer.status === 'Active' ? 'bg-green-500 hover:bg-green-600' : ''}
                    >
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <UserCog className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
