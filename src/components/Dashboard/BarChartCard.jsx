import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PROJECTIONS_DATA } from "../../data/dashboardData";
import "./style/BarChartCard.css";

const BarChartCard = () => {
  const yAxisTicks = [0, 10, 20, 30];

  return (
    <div className="chart-card bar-chart-card">
      <div className="chart-title">Projections vs Actuals</div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={PROJECTIONS_DATA}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--color-chart-grid)"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="var(--color-text-secondary)"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            stroke="var(--color-text-secondary)"
            ticks={yAxisTicks}
            tickFormatter={(value) => `${value}M`}
          />

          <Bar
            dataKey="actuals"
            stackId="a"
            fill="#80a0d9"
            barSize={20}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="projections"
            stackId="a"
            fill="#c9d3e8"
            barSize={20}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCard;
