import React, { useContext, useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { SavedPlacesContext } from '../App';

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

export const CountryTraveledLogger = ({ name }) => {
  const { pastPlaces, setPastPlaces } = useContext(SavedPlacesContext);
  const [editing, setEditing] = useState(false);
  const formik = useFormik({
    initialValues: {
      countryName: name,
      tripNotes: '',
      accomodation: '',
      goBack: ''
    },
    onSubmit: values => {
      const places = { ...pastPlaces };
      places[name] = values;
      setPastPlaces(places);
      setEditing(!editing);
    }
  });
  return editing ? (
    <TravelLog>
      <h1>{name}</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="tripNotes">Trip Notes</label>
        <br />
        <textarea
          id="tripNotes"
          name="tripNotes"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tripNotes}
        />
        <br />
        <label>Type of Accomodation</label>
        <br />
        <label for="hostel">Hostel</label>
        <input
          type="radio"
          id="hostel"
          name="accomodation"
          value="Hostel"
          onChange={formik.handleChange}
        />
        <br />
        <label for="Hotel">Hotel</label>
        <input
          type="radio"
          id="hotel"
          name="accomodation"
          value="Hotel"
          onChange={formik.handleChange}
        />
        <br />
        <label for="airBnb">AirBnb</label>
        <input
          type="radio"
          id="airBnb"
          name="accomodation"
          value="airBnb"
          onChange={formik.handleChange}
        />
        <br />
        <label>Would go back?</label>
        <input
          type="checkbox"
          id="goBack"
          name="goBack"
          value={formik.values.goBack}
          onChange={formik.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </TravelLog>
  ) : (
    <TravelLog>
      <h1>{name}</h1>
      <SaveButton onClick={() => setEditing(!editing)}>
        Create Travel Log
      </SaveButton>
    </TravelLog>
  );
};
