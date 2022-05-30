import React from 'react';
import PlayGroundList from '../components/PlayGroundList.jsx';

function LandingPage({ playgrounds }) {
  return (
    <>
      <PlayGroundList playgrounds={playgrounds} />
    </>
  );
}

export default LandingPage;
