import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { REVENUE_DATA } from "../../data/dashboardData";
import "./style/LineChartCard.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          color: "#4b5563",
          fontSize: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontWeight: "bold", margin: 0 }}>{`Day: ${label}`}</p>
        <p style={{ margin: "4px 0 0" }}>
          <span style={{ color: "var( --color-chart-line-current)" }}>
            &#9632;
          </span>
          {` Current: $${payload[0].value}K`}
        </p>
        <p style={{ margin: "4px 0 0" }}>
          <span style={{ color: "var(--color-chart-line-previous)" }}>
            &#9632;
          </span>
          {` Previous: $${payload[1].value}K`}
        </p>
      </div>
    );
  }
  return null;
};

const LineChartCard = () => {
  const yAxisTicks = [0, 10, 20, 30];
  return (
    <div className="chart-card line-chart-card">
      <div className="chart-header">
        <div className="chart-title">Revenue</div>
        <div className="chart-legend-center">
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-dot current-week"></span>
              Current Week :<span className="legend-item-value">58000$</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot previous-week"></span>
              Previous Week : <span className="legend-item-value">69621$</span>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={REVENUE_DATA}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#9ca3af"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            stroke="#9ca3af"
            ticks={yAxisTicks}
            tickFormatter={(value) => `${value}M`}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="current"
            stroke="var( --color-chart-line-current)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />

          <Line
            type="monotone"
            dataKey="previous"
            stroke="var(--color-chart-line-previous)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCard;
