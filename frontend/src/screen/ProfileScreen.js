import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions'; // Assuming you have created the getUserProfile action.

const ProfileScreen = ({ match }) => {
  const dispatch = useDispatch();

  // Extract the username from the URL parameter
  const username = match.params.username;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    // Dispatch the getUserProfile action with the username parameter
    dispatch(getUserProfile(username));
  }, [dispatch, username]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h2>User Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add other profile details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
