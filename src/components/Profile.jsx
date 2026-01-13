import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const [user, setUser] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : null;
  });

  useEffect(() => {
    if (location.state?.userData) {
      setUser(location.state.userData);
      localStorage.setItem("userData", JSON.stringify(location.state.userData));
    }
  }, [location.state]);
  const userStats = [
    { label: "Total Spent", value: "$2,450", percentage: 65 },
    { label: "Orders", value: "24", percentage: 45 },
    { label: "Savings", value: "$340", percentage: 80 },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-light ">Profile</h1>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-white rounded-lg transition text-slate-600 text-xl">
              ⚙️
            </button>
            <button className="p-2 hover:bg-white rounded-lg transition text-slate-600 text-xl">
              🚪
            </button>
            <NavLink to="/">Go to Home</NavLink>
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
                className="bg-white/10 rounded-xl p-6 shadow-sm border border-slate-200/20"
              >
                <p className="text-sm text-slate-500 mb-3">{stat.label}</p>
                <p className="text-2xl font-light  mb-4">{stat.value}</p>

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
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center pb-3 border-b border-slate-100 last:border-0"
              >
                <p className="text-sm text-slate-600">
                  Order #{20240000 + item} completed
                </p>
                <span className="text-xs text-slate-400">2 days ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
