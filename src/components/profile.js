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
      <div className="rocket-profile-div">
        <div>
          <RocketProfile />
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
