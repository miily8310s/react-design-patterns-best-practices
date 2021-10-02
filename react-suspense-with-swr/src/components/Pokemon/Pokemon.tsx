import useSWR from "swr";
import { StyledHeader, StyledCard } from "./Pokemon.styled";

const Pokemon = ({ pokemonName }: { pokemonName: string }) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (data.error || error) {
    return <div></div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { id, name, sprites, types } = data;
  const pokemonTypes = types.map((pokemonType: any) => pokemonType.type.name);

  return (
    <StyledCard pokemonType={pokemonTypes[0]}>
      <StyledHeader>
        <h2>{name}</h2>
        <div>#{id}</div>
      </StyledHeader>
      <img src={sprites.front_default} alt={name} />
      <div>
        {pokemonTypes.map((pokemonType: string) => (
          <div key={pokemonType}>{pokemonType}</div>
        ))}
      </div>
    </StyledCard>
  );
};

export default Pokemon;
