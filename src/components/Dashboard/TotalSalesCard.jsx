import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { SALES_DATA, COLORS } from "../../data/dashboardData";
import "./style/TotalSalesCard.css";

const TotalSalesCard = () => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="chart-card total-sales-card">
      <div className="chart-title">Total Sales</div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={SALES_DATA}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            cornerRadius={5}
          >
            {SALES_DATA.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className="sales-list">
        {SALES_DATA.map((item, index) => (
          <li key={item.name}>
            <div className="list-item-content">
              <span
                className="list-dot"
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              {item.name}
            </div>
            <span>${item.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalSalesCard;
