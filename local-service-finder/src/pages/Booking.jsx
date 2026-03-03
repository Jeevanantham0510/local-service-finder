function Booking() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Book a Service</h2>

      <input type="text" placeholder="Service Name" style={styles.input} />
      <input type="date" style={styles.input} />

      <button style={styles.button}>Confirm Booking</button>
    </div>
  );
}

const styles = {
  input: {
    display: "block",
    padding: "10px",
    margin: "10px 0",
    width: "300px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none"
  }
};

export default Booking;