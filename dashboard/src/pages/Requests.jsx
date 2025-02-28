const Requests = () => {
  const requests = [
    { id: 1, hospital: 'City Hospital', bloodType: 'O+', units: 5, status: 'Pending' },
    // Add more dummy data
  ];

  return (
    <div className="requests">
      <h1>Blood Requests</h1>
      <table>
        <thead>
          <tr>
            <th>Hospital</th>
            <th>Blood Type</th>
            <th>Units</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.hospital}</td>
              <td>{request.bloodType}</td>
              <td>{request.units}</td>
              <td>{request.status}</td>
              <td>
                <button>Approve</button>
                <button>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;