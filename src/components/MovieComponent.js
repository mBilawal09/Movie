import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 200px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
  margin: -5px; /* add negative margin to reduce spacing */
`;

const CoverImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: contain;
`;
const MovieName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <MovieContainer
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <CoverImage src={Poster} alt={Title} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year : {Year}</MovieInfo>
        <MovieInfo>Type : {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};
export default MovieComponent;
