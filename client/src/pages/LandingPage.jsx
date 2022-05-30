import React from 'react';
import PlayGroundList from '../components/PlaygroundList/PlaygroundList.jsx';

function LandingPage({ playgrounds }) {
  return (
    <>
      <PlayGroundList playgrounds={playgrounds} />
    </>
  );
}

export default LandingPage;
