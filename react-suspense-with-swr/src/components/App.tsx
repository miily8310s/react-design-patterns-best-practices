import { SWRConfig } from "swr";
import fetcher from "./Pokemon/fetcher";
import PokeContainer from "./Pokemon/PokeContainer";

const App = () => {
  return (
    <>
      <div>
        <SWRConfig value={{ fetcher, suspense: true }}>
          <PokeContainer />
        </SWRConfig>
      </div>
    </>
  );
};

export default App;
