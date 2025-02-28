import { useState } from 'react';

const Donors = () => {
  const [donors] = useState([
    { id: 1, name: 'John Doe', bloodType: 'A+', lastDonation: '2023-08-01', status: 'Active' },
    { id: 2, name: 'Jane Smith', bloodType: 'O-', lastDonation: '2023-07-25', status: 'Inactive' },
    { id: 3, name: 'Mike Johnson', bloodType: 'B+', lastDonation: '2023-08-15', status: 'Active' },
  ]);

  return (
    <div className="page-container">
      <h1>Donor Management</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Last Donation</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map(donor => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.bloodType}</td>
              <td>{donor.lastDonation}</td>
              <td>
                <span className={`status-badge ${donor.status.toLowerCase()}`}>
                  {donor.status}
                </span>
              </td>
              <td>
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donors;