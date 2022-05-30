import React from 'react';
import styled from 'styled-components';

function PlaygroundDetail({ currentPlayground }) {
  return (
    <Wrapper>
      <GeneralInformation>
        <h2>{currentPlayground.spielplatzname}</h2>
        <p>
          {currentPlayground.stadtbezirk === currentPlayground.stadtteil
            ? currentPlayground.stadtbezirk
            : `${currentPlayground.stadtbezirk}, ${currentPlayground.stadtteil}`}
          {currentPlayground.stadtteil === currentPlayground.stadtviertel
            ? ''
            : `, ${currentPlayground.stadtviertel}`}
        </p>
        <p>Spielplatz Nummer: {currentPlayground.spielplatz_nr}</p>
      </GeneralInformation>
      {/* <GridWarpper> */}
        <Traffic>
          <TrafficHeadline>Verkehr:</TrafficHeadline>
          <LowTraffic>An verkehrsarmer Strasse:</LowTraffic>
          <LowTrafficValue></LowTrafficValue>
          <TrafficSafe>An einer Vekehrssicheren Straße:</TrafficSafe>
          <TrafficSafeValue></TrafficSafeValue>
          <SpecialFeatures>Besonderheiten:</SpecialFeatures>
          <SpecialFeaturesValue></SpecialFeaturesValue>
          <Park>In einer Grünanlage/Park:</Park>
          <ParkValue></ParkValue>
          <ResidentialComplex>In einer Wohnanlage:</ResidentialComplex>
          <ResidentialComplexValue></ResidentialComplexValue>
          <ResidentialArea>In einem Wohnviertel:</ResidentialArea>
          <ResidentialAreaValue></ResidentialAreaValue>
        </Traffic>
         <FootballWrapper>
        <BallSportsHeadline>Ballsport</BallSportsHeadline>
        <BallSportsAvailable>Ball Sportangebot vorhanden:</BallSportsAvailable>
        <BallSportsAvailableValue></BallSportsAvailableValue>
        <Goals>Fussballtore</Goals>
        <GoalsValue></GoalsValue>
        <GoalWall>Torwand</GoalWall>
        <GoalWallValue></GoalWallValue>
        <FootballFieldSurface>Fussball Platzbelag:</FootballFieldSurface>
        <FootballFieldSurfaceValue></FootballFieldSurfaceValue>
        <BasketballHoops>Basketballkörbe:</BasketballHoops>
        <BasketballHoopsValue></BasketballHoopsValue>
      </FootballWrapper>
      <OtherSports>
        <OtherSportsHeadline>Sonstige Sportarten</OtherSportsHeadline>
        <BowlingAlley>Boulebahn:</BowlingAlley>
        <BowlingAlleyValue></BowlingAlleyValue>
        <SkaterElements>Skaterelemente:</SkaterElements>
        <SkaterElementsValue></SkaterElementsValue>
        <TableTennisTable>Tischtennisplatte(n):</TableTennisTable>
        <TableTennisTableValue></TableTennisTableValue>
        <Comment>Bemerkung:</Comment>
        <CommentValue></CommentValue> 
      </OtherSports>
      {/* </GridWarpper> */}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const GeneralInformation = styled.section`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1em;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

const TrafficHeadline = styled.h3`
  grid-area: trafficHeadline;
`;

const LowTraffic = styled.li`
  grid-area: lowTraffic;
`;

const LowTrafficValue = styled.li`
  grid-area: lowTrafficValue;
`;

const TrafficSafe = styled.li`
  grid-area: trafficSafe;
`;

const TrafficSafeValue = styled.li`
  grid-area: trafficSafeValue;
`;

const SpecialFeatures = styled.li`
  grid-area: specialFeatures;
`;
const SpecialFeaturesValue = styled.li`
  grid-area: specialFeaturesValue;
`;

const Park = styled.li`
  grid-area: park;
`;
const ParkValue = styled.li`
  grid-area: parkValue;
`;

const ResidentialComplex = styled.li`
  grid-area: residentialComplex;
`;
const ResidentialComplexValue = styled.li`
  grid-area: residentialComplexValue;
`;

const ResidentialArea = styled.li`
  grid-area: residentialArea;
`;
const ResidentialAreaValue = styled.li`
  grid-area: residentialAreaValue;
`;

const BallSportsHeadline = styled.h3`
  grid-area: ballSportsHeadline;
`;

const BallSportsAvailable = styled.li`
  grid-area: ballSportsAvailable;
`;
const BallSportsAvailableValue = styled.li`
  grid-area: ballSportsAvailableValue;
`;

const Goals = styled.li`
  grid-area: goals;
`;

const GoalsValue = styled.li`
  grid-area: goalsValue;
`;
const GoalWall = styled.li`
  grid-area: goalWall;
`;

const GoalWallValue = styled.li`
  grid-area: goalWallValue;
`;

const FootballFieldSurface = styled.li`
  grid-area: footballFieldSurface;
`;
const FootballFieldSurfaceValue = styled.li`
  grid-area: footballFieldSurfaceValue;
`;

const BasketballHoops = styled.li`
  grid-area: basketballHoops;
`;

const BasketballHoopsValue = styled.li`
  grid-area: basketballHoopsValue;
`;

const OtherSportsHeadline = styled.h3`
  grid-area: otherSportsHeadline;
`;
const BowlingAlley = styled.li`
  grid-area: bowlingAlley;
`;

const BowlingAlleyValue = styled.li`
  grid-area: bowlingAlleyValue;
`;

const SkaterElements = styled.li`
  grid-area: skaterElements;
`;
const SkaterElementsValue = styled.li`
  grid-area: skaterElementsValue;
`;

const TableTennisTable = styled.li`
  grid-area: tableTennisTable;
`;

const TableTennisTableValue = styled.li`
  grid-area: tableTennisTableValue;
`;
const Comment = styled.li`
  grid-area: comment;
`;

const CommentValue = styled.li`
  grid-area: commentValue;
`;

const Traffic = styled.section`
  display: grid;
  grid-template-columns: 65% 5% 25%;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-template-areas:
    'trafficHeadline trafficHeadline trafficHeadline'
    'lowTraffic . lowTrafficValue'
    'trafficSafe . trafficSafeValue'
    'specialFeatures . specialFeaturesValue'
    'park . parkValue'
    'residentialComplex . residentialComplexValue'
    'residentialArea . residentialAreaValue';
  margin-top: 1rem;
  margin-bottom: 0.25rem;
  padding: 1em;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

const FootballWrapper = styled.section`
  display: grid;
  grid-template-columns: 65% 5% 25%;
  grid-template-rows: auto auto auto auto auto auto;
  grid-template-areas:
    'ballSportsHeadline ballSportsHeadline ballSportsHeadline'
    'ballSportsAvailable . ballSportsAvailableValue'
    'goals . goalsValue'
    'goalWall . goalWallValue'
    'footballFieldSurface . footballFieldSurfaceValue'
    'basketballHoops . basketballHoopsValue';
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  padding: 1em;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

const OtherSports = styled.section`
  display: grid;
  grid-template-columns: 65% 5% 25%;
  grid-template-rows: auto auto auto auto auto;
  grid-template-areas:
    'otherSportsHeadline otherSportsHeadline otherSportsHeadline'
    'bowlingAlley . bowlingAlleyValue'
    'skaterElements . skaterElementsValue'
    'tableTennisTable . tableTennisTableValue'
    'comment . commentValue';
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  padding: 1em;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

export default PlaygroundDetail;
