const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      <div className="stats-container">
        <div className="stat-card blood-available">
          <h3>Total Blood Units</h3>
          <p>1,234</p>
        </div>
        <div className="stat-card active-donors">
          <h3>Active Donors</h3>
          <p>567</p>
        </div>
        <div className="stat-card hospitals-registered">
          <h3>Hospitals</h3>
          <p>89</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;