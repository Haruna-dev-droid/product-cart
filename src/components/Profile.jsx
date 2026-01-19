import React, {
  useMemo,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "./CartContext.jsx";

export default function Profile() {
  const location = useLocation();
  const [user, setUser] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : null;
  });
  // const { cart, confirmCart } = useCart();
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    if (location.state?.userData) {
      setUser(location.state.userData);
      localStorage.setItem("userData", JSON.stringify(location.state.userData));
    }
  }, [location.state]);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("completedOrders") || "[]");
    setCompletedOrders(orders);
  }, []);
  const userStats = useMemo(() => {
    const totalSpent = completedOrders.reduce(
      (sum, order) => sum + order.total,
      0,
    );
    const orderCount = completedOrders.length;
    const savingsAmount = totalSpent * 0.1;
    const monthlyBudget = 3000;

    const spentPercentage = (totalSpent / monthlyBudget) * 100;
    const ordersPercentage = (orderCount / 50) * 100;
    const savingPercentage = (savingsAmount / 500) * 100;

    return [
      {
        label: "Total Spent",
        value: `$${totalSpent.toFixed(2)}`,
        percentage: Math.min(spentPercentage, 100),
      },
      {
        label: "Orders",
        value: orderCount.toString(),
        percentage: Math.min(ordersPercentage, 100),
      },
      {
        label: "Savings",
        value: `${savingsAmount.toFixed(2)}`,
        percentage: Math.min(savingPercentage, 100),
      },
    ];
  }, [completedOrders]);
  return (
    <div className="min-h-screen bg-black text-white p-8 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-light ">Profile</h1>
            <div className="flex gap-4 items-center">
              <button className="p-2 hover:bg-white rounded-lg transition text-slate-600 text-xl">
                ⚙️
              </button>
              <button className="p-2 hover:bg-white rounded-lg transition text-slate-600 text-xl">
                🚪
              </button>
              <NavLink to="/" className="font-bold">
                Home
              </NavLink>
            </div>
          </div>

          {/* User Card */}
          <div className="bg-white/10 rounded-2xl p-8 mb-8 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl">
                👤
              </div>
              <div>
                <h2 className="text-2xl font-light ">
                  {user ? `${user.firstName} ${user.lastName}` : "Guest User"}
                </h2>
                <p className="text-sm text-slate-500">
                  {user ? `${user.email}` : "Guest User"}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Member since Jan 2024
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">📈</span>
              <h3 className="text-xl font-light ">Spending Overview</h3>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {userStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl md:mx-0 mx-auto p-6 shadow-sm border border-slate-200/20"
                >
                  <p className="text-sm text-slate-500 mb-3">{stat.label}</p>
                  <p className="md:text-2xl text-lg font-light  mb-4">
                    {stat.value}
                  </p>

                  {/* Bar Chart */}
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/10 rounded-xl p-6 shadow-sm border border-slate-200/10">
            <h3 className="text-lg font-light  mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {completedOrders.length > 0 ? (
                completedOrders
                  .slice()
                  .reverse()
                  .map((order) => {
                    const daysAgo = Math.floor(
                      (Date.now() - new Date(order.date).getTime()) /
                        (1000 * 60 * 60 * 24),
                    );
                    const timeLabel =
                      daysAgo === 0
                        ? "Today"
                        : daysAgo === 1
                          ? "Yesterday"
                          : `${daysAgo} days ago`;
                    return (
                      <div
                        key={order.id}
                        className="flex justify-between items-center pb-3 border-b border-slate-100 last:border-0"
                      >
                        <div>
                          <p className="text-sm text-slate-600">
                            Order #{order.id} completed - $
                            {order.total.toFixed(2)}
                          </p>
                          <p className="text-xs text-slate-500">
                            {order.items.length} item(s)
                          </p>
                        </div>
                        <span className="text-xs text-slate-400">
                          {timeLabel}
                        </span>
                      </div>
                    );
                  })
              ) : (
                <p className="text-sm text-slate-500">
                  No completed orders yet
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
