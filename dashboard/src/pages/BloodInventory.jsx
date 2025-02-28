const BloodInventory = () => {
    const inventory = [
      { bloodType: 'A+', quantity: 150, location: 'Main Bank' },
      { bloodType: 'B+', quantity: 90, location: 'Main Bank' },
      { bloodType: 'O-', quantity: 75, location: 'North Branch' },
    ];
  
    return (
      <div className="page-container">
        <h1>Blood Inventory</h1>
        <table className="data-table">
          <thead>
            <tr>
              <th>Blood Type</th>
              <th>Quantity (Units)</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index}>
                <td>{item.bloodType}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
                <td>
                  <button className="action-btn edit">Update</button>
                  <button className="action-btn delete">Transfer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default BloodInventory;