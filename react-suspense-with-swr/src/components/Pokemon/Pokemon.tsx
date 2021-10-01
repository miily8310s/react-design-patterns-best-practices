import useSWR from "swr";

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
    <div>
      <div>
        <h2>{name}</h2>
        <div>#{id}</div>
      </div>
      <img src={sprites.front_default} alt={name} />
      <div>
        {pokemonTypes.map((pokemonType: string) => (
          <div>{pokemonType}</div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
