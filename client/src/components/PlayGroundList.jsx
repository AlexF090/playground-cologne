import React, { useEffect, useState } from 'react';

function PlayGroundList({ playgrounds }) {
  return (
    <>
      <ul>
        {playgrounds &&
          playgrounds.map(playground => {
            const attributes = playground.attributes;

            return (
              <li key={attributes.objectid}>
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
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default PlayGroundList;
