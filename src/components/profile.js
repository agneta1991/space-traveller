import React from 'react';
import '../styles/profile.css';
import RocketProfile from './rocketProfile';
import MissionsProfile from './MissionsProfile';

const Profile = () => (
  <div className="main-profile-div">
    <div className="missions-profile-div">
      <div>
        <MissionsProfile />
      </div>
    </div>
    <div className="rockets-profile-div">
      <h2>My Rockets</h2>
      <div className="content">
        <RocketProfile />
      </div>
    </div>
  </div>
);

export default Profile;
