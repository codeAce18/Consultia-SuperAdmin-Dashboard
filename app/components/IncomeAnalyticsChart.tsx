"use client";

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 10, income2: 15 },
  { name: "Feb", income: 12, income2: 17 },
  { name: "Mar", income: 20, income2: 30 },
  { name: "Apr", income: 22, income2: 25 },
  { name: "May", income: 30, income2: 40 },
  { name: "Jun", income: 28, income2: 45 },
  { name: "Jul", income: 35, income2: 50 },
  { name: "Aug", income: 25, income2: 35 },
  { name: "Sep", income: 22, income2: 30 },
  { name: "Oct", income: 30, income2: 33 },
  { name: "Nov", income: 34, income2: 40 },
  { name: "Dec", income: 40, income2: 50 },
];

const IncomeAnalyticsChart = () => {
    const [year, setYear] = useState(2024);
    const years = [2024, 2023, 2022];

  return (
    <div className="w-full h-[300px] bg-white p-6 pb-10 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold mb-2">
                Income Analytics
            </h2>
            <select
              className="outline-none text-[14px] leading-[24px] tracking-[-2%] font-bold text-[#7B91B0]"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
        </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            domain={[0, 50]}
            tickFormatter={(tick) => `${tick}m`}
          />
          <Tooltip formatter={(value) => `${value}m`} />
          <Bar dataKey="income" fill="#A7A3DD" barSize={20} radius={[4, 4, 0, 0]} />
          <Bar dataKey="income2" fill="#5B52B6" barSize={20} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeAnalyticsChart;
