import React from 'react';
import {
  TravelLog,
  LikedPlace,
  DisikedPlace,
  DiaryText
} from '../styles/styles';

export const CountryTraveledLog = props => {
  return (
    <TravelLog>
      <p>Place Visited:</p>
      <DiaryText data-testid="diaryText">{props.log.countryName}</DiaryText>
      <p>Diary Entry:</p>
      <DiaryText>{props.log.tripNotes}</DiaryText>
      {props.log.accomodation && <p>My Accomodation:</p>}
      <DiaryText>{props.log.accomodation}</DiaryText>
      {props.log.goBack && (
        <>
          <DiaryText>~ I would go back! ~</DiaryText>
          <LikedPlace size="30px" />
        </>
      )}
      {!props.log.goBack && (
        <>
          <DiaryText>~ Never Ever Ever Again ~</DiaryText>
          <DisikedPlace size="30px" />
        </>
      )}
    </TravelLog>
  );
};
