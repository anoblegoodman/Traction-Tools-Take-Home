import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { SavedPlacesContext } from '../App';
import { TravelLog, TextArea, ButtonSm, ErrorText } from '../styles/styles';

export const CountryTraveledLogger = ({ name }) => {
  const { pastPlaces, setPastPlaces } = useContext(SavedPlacesContext);
  const [editing, setEditing] = useState(false);
  const [logHasErrors, setLogHasErrors] = useState(false);
  const formik = useFormik({
    initialValues: {
      countryName: name,
      tripNotes: '',
      accomodation: '',
      goBack: ''
    },
    onSubmit: values => {
      if (values.tripNotes.length === 0) {
        setLogHasErrors(true);
        return;
      } else {
        setLogHasErrors(false);
        const places = { ...pastPlaces };
        places[name] = values;
        setPastPlaces(places);
        setEditing(!editing);
      }
    }
  });
  return editing ? (
    <TravelLog>
      <h1>{name}</h1>
      <form onSubmit={formik.handleSubmit}>
        <label for="tripNotes">Trip Notes</label>
        <br />
        <TextArea
          rows="10"
          cols="30"
          id="tripNotes"
          name="tripNotes"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tripNotes}
        />
        {logHasErrors && <ErrorText>Trip notes are required</ErrorText>}
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
        <ButtonSm data-testid="submit" type="submit">
          Submit
        </ButtonSm>
      </form>
    </TravelLog>
  ) : (
    <TravelLog>
      <h1>{name}</h1>
      <ButtonSm data-testid={`${name}`} onClick={() => setEditing(!editing)}>
        Create Travel Log
      </ButtonSm>
    </TravelLog>
  );
};
