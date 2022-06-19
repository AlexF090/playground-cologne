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
        <p>Spielplatz Nummer {currentPlayground.spielplatz_nr}</p>
      </GeneralInformation>
      <Traffic>
        <TrafficHeadline>Verkehr</TrafficHeadline>
        <LowTraffic>An verkehrsarmer Strasse:</LowTraffic>
        <LowTrafficValue>
          {currentPlayground.an_verkehrsarmer_strasse === 'x' ? '✅' : '❌'}
        </LowTrafficValue>
        <TrafficSafe>An einer Vekehrssicheren Straße</TrafficSafe>
        <TrafficSafeValue>
          {currentPlayground.an_verkehrsreicher_strasse ? '✅' : '❌'}
        </TrafficSafeValue>
        <SpecialFeatures>Besonderheiten</SpecialFeatures>
        <SpecialFeaturesValue>
          {currentPlayground.besonderheiten !== null ? currentPlayground.besonderheiten : '❌'}
        </SpecialFeaturesValue>
        <Park>In einer Grünanlage/Park</Park>
        <ParkValue>{currentPlayground.in_einer_gruenanlage_park !== null ? '✅' : '❌'}</ParkValue>
        <ResidentialComplex>In einer Wohnanlage:</ResidentialComplex>
        <ResidentialComplexValue>
          {currentPlayground.in_einer_wohnanlage !== null ? '✅' : '❌'}
        </ResidentialComplexValue>
        <ResidentialArea>In einem Wohnviertel</ResidentialArea>
        <ResidentialAreaValue>
          {currentPlayground.wohnviertel !== null ? '✅' : '❌'}
        </ResidentialAreaValue>
      </Traffic>
      <FootballWrapper>
        <BallSportsHeadline>Ballsport</BallSportsHeadline>
        <BallSportsAvailable>Ball Sportangebot vorhanden</BallSportsAvailable>
        <BallSportsAvailableValue>
          {currentPlayground.ball_sportangebot_vorhanden === 'ja' ? '✅' : '❌'}
        </BallSportsAvailableValue>
        <Goals>Fussballtore</Goals>
        <GoalsValue>
          {currentPlayground.fussballtore !== null ? currentPlayground.fussballtore : '❌'}
        </GoalsValue>
        <GoalWall>Torwand</GoalWall>
        <GoalWallValue>
          {currentPlayground.torwand !== null ? currentPlayground.torwand : '❌'}
        </GoalWallValue>
        {currentPlayground.platzbelag_fussball !== null ? (
          <>
            <FootballFieldSurface>Fussball Platzbelag</FootballFieldSurface>
            <FootballFieldSurfaceValue>
              {currentPlayground.platzbelag_fussball}
            </FootballFieldSurfaceValue>
          </>
        ) : (
          ''
        )}
        <BasketballHoops>Basketballkörbe</BasketballHoops>
        <BasketballHoopsValue>
          {currentPlayground.basketballkoerbe !== null ? currentPlayground.basketballkoerbe : '❌'}
        </BasketballHoopsValue>
      </FootballWrapper>
      <OtherSports>
        <OtherSportsHeadline>Sonstige Sportarten</OtherSportsHeadline>
        <BowlingAlley>Boulebahn</BowlingAlley>
        <BowlingAlleyValue>
          {currentPlayground.boulebahn !== null ? currentPlayground.boulebahn : '❌'}
        </BowlingAlleyValue>
        <SkaterElements>Skaterelemente</SkaterElements>
        <SkaterElementsValue>
          {currentPlayground.skaterelemente !== null ? currentPlayground.skaterelemente : '❌'}
        </SkaterElementsValue>
        <TableTennisTable>Tischtennisplatte(n)</TableTennisTable>
        <TableTennisTableValue>
          {currentPlayground.tischtennisplatten !== null
            ? currentPlayground.tischtennisplatten
            : '❌'}
        </TableTennisTableValue>
        <Comment>Bemerkung</Comment>
        <CommentValue>
          {currentPlayground.bemerkung !== null ? currentPlayground.bemerkung : '❌'}
        </CommentValue>
      </OtherSports>
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
  align-items: center;
  gap: 0.5em 0;
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
  align-items: center;
  gap: 0.5em 0;
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
  gap: 0.5em 0;
  align-items: center;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  padding: 1em;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

const TrafficHeadline = styled.h3`
  grid-area: trafficHeadline;
  text-align: center;
`;

const LowTraffic = styled.li`
  grid-area: lowTraffic;
`;

const LowTrafficValue = styled.li`
  grid-area: lowTrafficValue;
  justify-self: center;
`;

const TrafficSafe = styled.li`
  grid-area: trafficSafe;
`;

const TrafficSafeValue = styled.li`
  grid-area: trafficSafeValue;
  justify-self: center;
`;

const SpecialFeatures = styled.li`
  grid-area: specialFeatures;
`;
const SpecialFeaturesValue = styled.li`
  grid-area: specialFeaturesValue;
  justify-self: center;
`;

const Park = styled.li`
  grid-area: park;
`;
const ParkValue = styled.li`
  grid-area: parkValue;
  justify-self: center;
`;

const ResidentialComplex = styled.li`
  grid-area: residentialComplex;
`;
const ResidentialComplexValue = styled.li`
  grid-area: residentialComplexValue;
  justify-self: center;
`;

const ResidentialArea = styled.li`
  grid-area: residentialArea;
`;
const ResidentialAreaValue = styled.li`
  grid-area: residentialAreaValue;
  justify-self: center;
`;

const BallSportsHeadline = styled.h3`
  grid-area: ballSportsHeadline;
  text-align: center;
`;

const BallSportsAvailable = styled.li`
  grid-area: ballSportsAvailable;
`;
const BallSportsAvailableValue = styled.li`
  grid-area: ballSportsAvailableValue;
  justify-self: center;
`;

const Goals = styled.li`
  grid-area: goals;
`;

const GoalsValue = styled.li`
  grid-area: goalsValue;
  justify-self: center;
`;
const GoalWall = styled.li`
  grid-area: goalWall;
`;

const GoalWallValue = styled.li`
  grid-area: goalWallValue;
  justify-self: center;
`;

const FootballFieldSurface = styled.li`
  grid-area: footballFieldSurface;
`;
const FootballFieldSurfaceValue = styled.li`
  grid-area: footballFieldSurfaceValue;
  justify-self: center;
`;

const BasketballHoops = styled.li`
  grid-area: basketballHoops;
`;

const BasketballHoopsValue = styled.li`
  grid-area: basketballHoopsValue;
  justify-self: center;
`;

const OtherSportsHeadline = styled.h3`
  grid-area: otherSportsHeadline;
  text-align: center;
`;
const BowlingAlley = styled.li`
  grid-area: bowlingAlley;
`;

const BowlingAlleyValue = styled.li`
  grid-area: bowlingAlleyValue;
  justify-self: center;
`;

const SkaterElements = styled.li`
  grid-area: skaterElements;
`;
const SkaterElementsValue = styled.li`
  grid-area: skaterElementsValue;
  justify-self: center;
`;

const TableTennisTable = styled.li`
  grid-area: tableTennisTable;
`;

const TableTennisTableValue = styled.li`
  grid-area: tableTennisTableValue;
  justify-self: center;
`;
const Comment = styled.li`
  grid-area: comment;
`;

const CommentValue = styled.li`
  grid-area: commentValue;
  justify-self: center;
`;

export default PlaygroundDetail;
