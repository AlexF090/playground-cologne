import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaygroundDetail from '../components/PlaygroundDetail/PlaygroundDetail.jsx';

function DetailPage() {
  const { id } = useParams();
  const [currentPlayground, setCurrentPlayground] = useState();
  const url = `https://geoportal.stadt-koeln.de/arcgis/rest/services/freizeit_natur_sport/spielangebote/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=${id}&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=json`;

  function fetchPlayground() {
    fetch(url)
      .then(res => res.json())
      .then(data => setCurrentPlayground(data.features[0]));
  }

  useEffect(() => {
    fetchPlayground();
  }, []);

  return (
    <>
      {currentPlayground && <PlaygroundDetail
        id={currentPlayground.attributes.objectid}
        currentPlayground={currentPlayground.attributes}
      />}
    </>
  );
}
export default DetailPage;
