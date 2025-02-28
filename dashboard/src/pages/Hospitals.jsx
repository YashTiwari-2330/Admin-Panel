const Hospitals = () => {
    const hospitals = [
      { id: 1, name: 'City General Hospital', location: 'New York', contact: 'contact@cityhospital.com', beds: 500 },
      { id: 2, name: 'Central Medical Center', location: 'Los Angeles', contact: 'info@centralmed.com', beds: 750 },
    ];
  
    return (
      <div className="page-container">
        <h1>Hospital Management</h1>
        <table className="data-table">
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Beds</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map(hospital => (
              <tr key={hospital.id}>
                <td>{hospital.name}</td>
                <td>{hospital.location}</td>
                <td>{hospital.contact}</td>
                <td>{hospital.beds}</td>
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
  
  export default Hospitals;