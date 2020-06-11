import React, { useContext, useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const SaveButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  margin-bottom: 5px;
  padding: 0.25em 1em;
`;

const TravelLog = styled.div`
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 20px;
  width: 33%;
  padding: 40px;
  text-align: center;
`;

export const CountryTraveledLog = props => {
  return (
    <TravelLog>
      <h1>{props.log.countryName}</h1>
      <h2>{props.log.tripNotes}</h2>
      <h2>{props.log.accomodation}</h2>
      {props.log.goBack && <h2>~ I would go back! ~</h2>}
      {!props.log.goBack && <h2>~ Never Ever Ever Again ~</h2>}
    </TravelLog>
  );
};
