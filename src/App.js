import { BrowserRouter as ReactRouter } from "react-router-dom";
import { StoreProvider } from "./stores";
import CustomRouter from "./CustomRouter";

function App() {
  return (
    <StoreProvider>
      <ReactRouter>
        <CustomRouter />
      </ReactRouter>
    </StoreProvider>
  );
}

export default App;
