import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";
import Pokemon from "./Pokemon";

const Pokedex = () => {
  const { data } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=150");
  console.log(data);
  if (!data.results || data.error) {
    return <div></div>;
  }
  return (
    <>
      {data.results.map((pokemon: { name: string }) => (
        <Suspense fallback={<Skeleton height={200} width={200} />}>
          <Pokemon key={pokemon.name} pokemonName={pokemon.name}></Pokemon>
        </Suspense>
      ))}
    </>
  );
};

export default Pokedex;
