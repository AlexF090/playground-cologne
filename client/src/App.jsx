import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import DetailPage from './pages/DetailPage.jsx';

function App() {
  const [playgrounds, setPlaygrounds] = useState([]);
  const url =
    'https://geoportal.stadt-koeln.de/arcgis/rest/services/freizeit_natur_sport/spielangebote/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=json';

  function fetchPlaygrounds() {
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => setPlaygrounds(data.features));
    
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setPlaygrounds(data);
      });
      console.log(playgrounds)
  }

  useEffect(() => {
    fetchPlaygrounds();
  }, []);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategories(data);
  //     });
  // }, []);

  return (
    <>
      <h1>Spielplätze - Köln</h1>
      <Routes>
        <Route path="/" element={<LandingPage playgrounds={playgrounds} />} />
        <Route path=":id" element={<DetailPage playgrounds={playgrounds} />} />
      </Routes>
    </>
  );
}

export default App;
