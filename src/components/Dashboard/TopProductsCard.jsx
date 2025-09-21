import { TOP_PRODUCTS } from "../../data/dashboardData";
import "./style/TopProductsCard.css";

const TopProductsCard = () => (
  <div className="chart-card top-products-card">
    <div className="chart-title">Top Selling Products</div>
    <div className="table-container">
      <table className="products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-right">Quantity</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {TOP_PRODUCTS.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td className="text-right">${product.price.toFixed(2)}</td>
              <td className="text-right">{product.quantity}</td>
              <td className="text-right">${product.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TopProductsCard;
