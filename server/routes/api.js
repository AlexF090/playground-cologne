import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const router = express.Router();
const { MONGODB_URL } = process.env;
mongoose.connect(MONGODB_URL).then(() => {
  console.log('connected to Database');
});
const url =
  'https://geoportal.stadt-koeln.de/arcgis/rest/services/freizeit_natur_sport/spielangebote/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=json';

const Playgrounds = mongoose.Schema({
  objectid: { type: Number, required: true },
  typ: { type: String, default: false },
  spielplatz_nr: { type: String, required: true },
  spielplatzname: { type: String, required: true },
  spielplatzpaten: { type: String },
  stadtbezirk: { type: String },
  stadtteil: { type: String },
  stadtviertel: { type: String },
  an_verkehrsarmer_strasse: { type: String },
  besonderheiten: { type: String },
  in_einer_gruenanlage_park: { type: String },
  an_verkehrsreicher_strasse: { type: String },
  geschaefte_gewerbe: { type: String },
  in_einer_wohnanlage: { type: String },
  wohnviertel: { type: String },
  wohnen_und_geschäfte: { type: String },
  ball_sportangebot_vorhanden: { type: String },
  fussballtore: { type: String },
  torwand: { type: String },
  platzbelag_fussball: { type: String },
  basketballkoerbe: { type: String },
  boulebahn: { type: String },
  skaterelemente: { type: String },
  tischtennisplatten: { type: String },
  bemerkung: { type: String },
});

const PlaygroundsTable = mongoose.model('playgrounds', Playgrounds);

router.get('/', (req, res, next) => {
  PlaygroundsTable.find({}).then(data => {
    res.status(200).json(data);
  });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

export default router;
