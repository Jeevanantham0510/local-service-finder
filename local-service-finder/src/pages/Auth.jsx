import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={styles.container}>
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <input type="text" placeholder="Email" style={styles.input} />
      <input type="password" placeholder="Password" style={styles.input} />

      {!isLogin && (
        <input type="text" placeholder="Phone Number" style={styles.input} />
      )}

      <button style={styles.button}>
        {isLogin ? "Login" : "Register"}
      </button>

      <p onClick={() => setIsLogin(!isLogin)} style={styles.toggle}>
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none"
  },
  toggle: {
    marginTop: "10px",
    color: "blue",
    cursor: "pointer"
  }
};

export default Auth;