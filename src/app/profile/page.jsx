"use client"
import React from 'react';
import ResponsiveDrawer from '../components/navigation';
import MyFavorites from '../components/favorites';

function Profile(props) {
  return (
    <main>
      <ResponsiveDrawer contentPage={<MyFavorites/>} />
    </main>
  );
}


export default Profile;
