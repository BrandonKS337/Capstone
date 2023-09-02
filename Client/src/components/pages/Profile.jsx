import React, { useState } from "react";
import "../styles/ProfilePage.css"

function Profile() {
  // Initialize state for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  // Handle the update profile button click
  const handleUpdateProfile = async () => {
    const id = user.id; // Not sure about this.....pretty sure this part is whats screwingme up

    const data = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      aboutMe: aboutMe,
    };

    try {
      const response = await fetch(
        `http://localhost:8000/api/auth/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Profile updated successfully!");
      } else {
        console.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("There was an error updating the profile:", error);
    }
  };

  return (
    <div className="profile-container">
      {/* <h1>Profile Page</h1>

      <div className="profile-info">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="About Me"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
        />
      </div>

      <button onClick={handleUpdateProfile}>Update Profile</button>
      <button>Delete Profile</button> */}
      <img src="./src/components/assets/profileImages/profile page.jpg" />
    </div>
  );
}

export default Profile;
