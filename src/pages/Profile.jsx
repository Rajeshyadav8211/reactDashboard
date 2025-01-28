import React, { useState } from "react";

const Profile = () => {
  // Dummy user data (you can fetch this data from an API)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    avatar: "https://via.placeholder.com/150",
  });

  return (
    <div style={styles.container}>
      {/* Profile Card */}
      <div style={styles.card}>
        <img src={user.avatar} alt="Avatar" style={styles.avatar} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button style={styles.editButton}>Edit Profile</button>
      </div>
    </div>
  );
};

// Inline Styles (you can replace this with your preferred styling method)
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  card: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  editButton: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;
