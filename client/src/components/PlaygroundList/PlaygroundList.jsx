import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function PlayGroundList({ playgrounds }) {
  return (
    <>
      <ul>
        {playgrounds &&
          playgrounds.map(playground => {
            const pgAttributes = playground;

            return (
              <PlaygroundItem key={pgAttributes.objectid}>
                <Link to={`/${pgAttributes.objectid}`}>
                  <h2>{pgAttributes.spielplatzname}</h2>
                  <p>
                    {pgAttributes.stadtbezirk === pgAttributes.stadtteil
                      ? pgAttributes.stadtbezirk
                      : `${pgAttributes.stadtbezirk}, ${pgAttributes.stadtteil}`}
                    {pgAttributes.stadtteil === pgAttributes.stadtviertel
                      ? ''
                      : `, ${pgAttributes.stadtviertel}`}
                  </p>
                  <p>Spielplatz Nummer: {pgAttributes.spielplatz_nr}</p>
                  {/* <p>{(attributes?.spielplatzpaten === 'x')
                  ? 'Spielplatzpaten: ✅'
                  : 'Spielplatzpaten: ❌'}</p> */}
                </Link>
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
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

export default PlayGroundList;
