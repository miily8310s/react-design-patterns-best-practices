import styled from "styled-components";

const type: any = {
  bug: "#2ADAB1",
  dark: "#636363",
  dragon: "#E9B057",
  electric: "#ffeb5b",
  fairy: "#ffdbdb",
  fighting: "#90a4b5",
  fire: "#F7786B",
  flying: "#E8DCB3",
  ghost: "#755097",
  grass: "#2ADAB1",
  ground: "#dbd3a2",
  ice: "#C8DDEA",
  normal: "#ccc",
  poison: "#cc89ff",
  psychic: "#705548",
  rock: "#b7b7b7",
  steel: "#999",
  water: "#58ABF6",
};

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const StyledTitle = styled.h1`
  text-align: center;
`;

export const StyledPokedex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
`;

interface StyledCardProps {
  pokemonType: string;
}

export const StyledCard = styled.div<StyledCardProps>`
  ${({ pokemonType }) => `
    background: ${type[pokemonType]};
  `}
  font-size: 13px;
  margin: 5px;
  width: 200px;
  border-radius: 5px;
  img {
    display: block;
    margin: auto;
  }
`;
