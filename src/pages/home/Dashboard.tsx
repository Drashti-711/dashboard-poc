import { columnsData } from "@/columns/column";
import { GlobalCard } from "@/common/card/Card";
import { GlobalDataTable } from "@/common/table/DataTable";
import { Progress } from "@/components/ui/progress";
import { data } from "@/helper/constant";
import { Binoculars, ChartLine, Users2Icon, Wallet } from "lucide-react";
import React from "react";

const HomePage = () => {
  const progressData = [
    { label: "Task Completion", value: 33, color: "red-500" },
    { label: "Upload Progress", value: 67, color: "green-500" },
    { label: "Order Fulfillment", value: 45, color: "yellow-500" },
    { label: "Overall Satisfaction", value: 80, color: "blue-500" },
  ];

  const dashboardCardData = [
    {
      title: "Revenue",
      value: 4805,
      icon: <Wallet />,
      description: '▲ $34 from last week',
      iconColor: "bg-red-500",
      descTextColor: 'text-green-500'
    },
    {
      title: "Total Customers",
      value: '8.4K',
      icon: <Users2Icon />,
      description: '▼ $24 from last week',
      iconColor: "bg-purple-500",
      descTextColor: 'text-red-500'
    },
    {
      title: "Store Visitors",
      value: '59K',
      icon: <Binoculars />,
      description: '▲ $34 from last week',
      iconColor: "bg-teal-500",
      descTextColor: 'text-green-500'
    },
    {
      title: "Bounce Rate",
      value: '34.46%',
      icon: <ChartLine />,
      description: '▼ 12.2% from last week',
      iconColor: "bg-yellow-500",
      descTextColor: 'text-red-500'
    }
  ]

  return (
    <div className="p-6 space-y-6 bg-background text-foreground min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {dashboardCardData?.map((data, index) => {
          return <React.Fragment key={index}>
            <GlobalCard
              title={data?.title}
              content={
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold">$4805</div>
                    <div className={`${data?.descTextColor}`}>{data?.description}</div>
                  </div>
                  <div className={`ml-auto ${data?.iconColor} p-3 text-white rounded-full shadow-lg`}>
                    {data?.icon}
                  </div>
                </div>
              }
              isFooter={false}
            />
          </React.Fragment>
        })}

      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 bg-background text-foreground p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Orders Summary</h2>

          <GlobalDataTable data={data} columns={columnsData} />
        </div>

        <div className="col-span-12 md:col-span-4 bg-background text-foreground p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
          {progressData.map((progress, index) => (
            <div key={index} className="mb-4">
              <span className="block font-medium mb-1">{progress.label}</span>
              <Progress
                value={progress.value}
                color={progress.color}
                className={`h-2 rounded-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
