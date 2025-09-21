import "./Dashboard.css";
import StatCard from "../../components/Dashboard/StatCard";
import BarChartCard from "../../components/Dashboard/BarChartCard";
import LineChartCard from "../../components/Dashboard/LineChartCard";
import LocationCard from "../../components/Dashboard/LocationCard";
import TopProductsCard from "../../components/Dashboard/TopProductsCard";
import TotalSalesCard from "../../components/Dashboard/TotalSalesCard";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">eCommerce</h1>
      </div>

      <div className="top-section-grid">
        <div className="stat-cards-grid">
          <StatCard
            title="Customers"
            value="3,781"
            change="+11.01"
            className="stat-card-light"
          />
          <StatCard title="Orders" value="1,219" change="-0.03" />
          <StatCard title="Revenue" value="$695" change="+15.03" />
          <StatCard
            title="Growth"
            value="30.1%"
            change="+6.08"
            className="stat-card-light-2"
          />
        </div>
        <BarChartCard />
      </div>

      <div className="main-content-grid">
        <LineChartCard />
        <LocationCard />
      </div>

      <div className="bottom-content-grid">
        <TopProductsCard />
        <TotalSalesCard />
      </div>
    </div>
  );
}

export default Dashboard;
