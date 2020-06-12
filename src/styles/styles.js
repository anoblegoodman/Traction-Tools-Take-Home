import styled from 'styled-components';
import { PlusCircle } from '@styled-icons/boxicons-solid/PlusCircle';
import { Loader } from '@styled-icons/feather/Loader';
import { GrinStars } from '@styled-icons/fa-solid/GrinStars';
import { Sad } from '@styled-icons/boxicons-solid/Sad';

// PSA:
// I sought to write reusable styled components
// as if this was pulled in from a design language library

export const HomeButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: auto;
  margin-bottom: 5px;
  padding: 0.25em 1em;
  font-size: 40px;
  text-align: center;
`;

export const DiaryText = styled.h2``;

export const ErrorText = styled.p`
  font-size: 15px;
  color: red;
`;

export const ButtonSm = styled.button`
  background: transparent;
  border-radius: 3px;
  position: relative;
  top: 0;
  left: 0;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0.25em 1em;
`;

export const LikedPlace = styled(GrinStars)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0.25em 1em;
`;

export const DisikedPlace = styled(Sad)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0.25em 1em;
`;

export const ContinentsButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 20px;
  margin: 10px;
  margin-bottom: 5px;
  padding: 0.25em 1em;
`;

export const Header = styled.div`
  background: transparent;
  border-radius: 3px;
  color: black;
  font-size: 30px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 30%;
  padding: 0.25em 1em;
  text-align: center;
`;

export const AddPlaceButton = styled(PlusCircle)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px;
  margin-bottom: 10px;
  padding: 0.25em 1em;
`;

export const LoadingIcon = styled(Loader)`
  background: transparent;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: palevioletred;
  text-align: center;
  margin: 10px;
  margin-bottom: 10px;
  padding: 0.25em 1em;
`;

export const TravelLog = styled.div`
  border-radius: 3px;
  border: 2px solid palevioletred;
  padding: 20px;
  text-align: center;
  margin: 20px;
  flex-shrink: 3;
`;

export const ListWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const TextArea = styled.textarea`
  border: 2px solid palevioletred;
`;
