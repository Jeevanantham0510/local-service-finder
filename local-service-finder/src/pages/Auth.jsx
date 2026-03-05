import { useState } from "react";
import API from "../service/api";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        const res = await API.post("/auth/login", form);

        alert(res.data.message);

        // Save login info
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("email", form.email);
        localStorage.setItem("isLoggedIn", "true");

        navigate("/providers");
      } else {
        await API.post("/auth/register", form);
        alert("Registered Successfully");
        setIsLogin(true);
      }
    } catch (err) {
      alert("Error occurred");
    }
  };

  return (

     <div style={styles.wrapper}>
    <div style={styles.container}>
      <h2>{isLogin ? "Login" : "Register"}</h2>

      {!isLogin && (
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      )}

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleSubmit}>
        {isLogin ? "Login" : "Register"}
      </button>

      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
        {isLogin ? "New user? Register" : "Already Login?"}
      </p>
    </div>
    </div>
    
  );
}

const styles = {
  wrapper: {
    minHeight: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    
    display: "flex",
    flexDirection: "column",
    width: "320px",
    padding: "30px",
    gap: "12px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default Auth;