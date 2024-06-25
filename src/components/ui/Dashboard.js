"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import { data } from "../data/data";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-white">
        <nav className="flex items-center gap-6 text-lg font-medium">
          <LogInIcon className="w-8 h-8" />
          <a href="#" className="font-bold text-yellow-500">
            Home
          </a>
          <a href="#">Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Tasks</a>
          <a href="#">Reporting</a>
          <a href="#">Users</a>
        </nav>
        <div className="flex items-center w-full gap-4 ml-auto">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Here"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 bg-gray-100">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 border border-blue-500">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <UserIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,812</div>
                <p className="text-xs text-green-500">+15.73%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
                <ShoppingCartIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,658</div>
                <p className="text-xs text-green-500">+21.15%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,000</div>
                <p className="text-xs text-green-500">+12.76%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Growth</CardTitle>
                <TrendingUpIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,000</div>
                <p className="text-xs text-green-500">+32.56%</p>
              </CardContent>
            </Card>
          </div>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Projections vs Actuals</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <MyResponsiveBar data={data} className="w-full ]" /> */}
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Total Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Segmentations</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={data} className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Account</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#1023</TableCell>
                  <TableCell>Jan 6, 2022</TableCell>
                  <TableCell>$25.50</TableCell>
                  <TableCell>
                    <span className="text-green-500">Paid</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SW</AvatarFallback>
                      </Avatar>
                      <div>
                        <p>Stephanie Willias</p>
                        <p className="text-xs text-muted-foreground">
                          olivia@untitledui.com
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <CreditCardIcon className="w-4 h-4" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#1024</TableCell>
                  <TableCell>Jan 7, 2022</TableCell>
                  <TableCell>$15.15</TableCell>
                  <TableCell>
                    <span className="text-yellow-500">Pending</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>RA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p>Roberto Acker</p>
                        <p className="text-xs text-muted-foreground">
                          roberto@untitledui.com
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <CreditCardIcon className="w-4 h-4" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={props.data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-123}
        innerRadius={0.7}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "yellow_orange_red" }}
        borderWidth={1}
        borderColor={{ theme: "background" }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#000000"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color", modifiers: [] }}
        arcLabelsRadiusOffset={0.45}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#0f0f0f"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
