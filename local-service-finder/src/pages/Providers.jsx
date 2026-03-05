import { useEffect, useState } from "react";
import API from "../service/api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/globalStyles";

function Providers() {

  const [providers,setProviders] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    API.get("/providers")
    .then(res => setProviders(res.data))
  },[])

  return (

    <div style={styles.page}>

      <h2 style={{textAlign:"center"}}>Available Providers</h2>

      <div style={styles.grid}>

        {providers.map((p)=>(

          <motion.div
            key={p.id}
            style={styles.card}
            whileHover={{scale:1.05}}
          >

            <h3>{p.name}</h3>
            <p><b>Service:</b> {p.serviceType}</p>
            <p><b>Location:</b> {p.location}</p>
            <p>⭐ {p.rating}</p>

            <button
              style={styles.button}
              onClick={()=>navigate(`/booking/${p.id}`)}
            >
              Book Now
            </button>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Providers;