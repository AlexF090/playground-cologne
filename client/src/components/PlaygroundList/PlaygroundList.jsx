import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function PlayGroundList({ playgrounds }) {
  return (
    <>
      <ul>
        {playgrounds &&
          playgrounds.map(playground => {
            const attributes = playground.attributes;

            return (
              <PlaygroundItem key={attributes.objectid}>
                <h2>{attributes.spielplatzname}</h2>
                <p>
                  {attributes.stadtbezirk === attributes.stadtteil
                    ? attributes.stadtbezirk
                    : `${attributes.stadtbezirk}, ${attributes.stadtteil}`}
                  {attributes.stadtteil === attributes.stadtviertel
                    ? ''
                    : `, ${attributes.stadtviertel}`}
                </p>
                <p>Spielplatz Nummer: {attributes.spielplatz_nr}</p>
                <p>{attributes.spielplatz}</p>
                {/* <p>{(attributes?.spielplatzpaten === 'x')
                  ? 'Spielplatzpaten: ✅'
                  : 'Spielplatzpaten: ❌'}</p> */}
              </PlaygroundItem>
            );
          })}
      </ul>
    </>
  );
}

const PlaygroundItem = styled.li`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1em;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

export default PlayGroundList;
