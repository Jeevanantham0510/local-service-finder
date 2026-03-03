function Providers() {
  const providers = [
    { id: 1, sname: "Electrician", location: "Erode",contact:"9876543210" },
    { id: 2, sname: "Plumber", location: "Chennai" ,contact:"8976543210"},
    { id: 3, sname: "Carpenter", location: "Chennai",contact:"7896543210" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Service Providers</h2>
      {providers.map((p) => (
        <div key={p.id} style={styles.card}>
          <h3>{p.sname}</h3>
          <p>{p.location}</p>
          <p>{p.contact}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid gray",
    padding: "10px",
    margin: "20px "
  }
};

export default Providers;