import "./styles/main.scss";
import Notes from "./containers/Notes";
import { ChildWrapper } from "./hoc/wrapper";

function App() {
  return (
    <ChildWrapper>
      <Notes />
    </ChildWrapper>
  );
}

export default App;
