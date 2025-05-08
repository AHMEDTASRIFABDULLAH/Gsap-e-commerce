import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/dashboard/orders" className="block hover:text-gray-300">
            Orders
          </Link>
          <Link
            to="/dashboard/add-product"
            className="block hover:text-gray-300"
          >
            Add Products
          </Link>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6">
        <Outlet /> {/* This renders the nested route content */}
      </div>
    </div>
  );
};

export default Dashboard;
