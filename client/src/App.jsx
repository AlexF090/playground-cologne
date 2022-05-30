import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  const [playgrounds, setPlaygrounds] = useState([]);
  const url =
    'https://geoportal.stadt-koeln.de/arcgis/rest/services/freizeit_natur_sport/spielangebote/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=json';

  function fetchPlaygrounds() {
    fetch(url)
      .then(res => res.json())
      .then(data => setPlaygrounds(data.features));
  }

  useEffect(() => {
    fetchPlaygrounds();
  }, []);

  return (
    <>
      <h1>Spielplätze - Köln</h1>
      <LandingPage playgrounds={playgrounds} />
    </>
  );
}

export default App;
