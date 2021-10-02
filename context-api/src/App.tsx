import "./App.css";
import Issues from "./components/Issues";
import IssueProvider from "./context/Issue";

const url = "https://api.github.com/repos/ContentPI/ContentPI/issues";

function App() {
  return (
    <IssueProvider url={url}>
      <Issues />
    </IssueProvider>
  );
}

export default App;
