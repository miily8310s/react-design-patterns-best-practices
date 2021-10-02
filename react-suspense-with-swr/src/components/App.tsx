import { SWRConfig } from "swr";
import fetcher from "./Pokemon/fetcher";
import PokeContainer from "./Pokemon/PokeContainer";
import { StyledTitle, StyledPokedex } from "./Pokemon/Pokemon.styled";

const App = () => {
  return (
    <>
      <StyledTitle>Pokedex</StyledTitle>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <StyledPokedex>
          <PokeContainer />
        </StyledPokedex>
      </SWRConfig>
    </>
  );
};

export default App;
