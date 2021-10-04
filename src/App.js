import { StoreProvider } from "./stores";
import AllLocations from "./pages/AllLocations";

function App() {
  return (
    <StoreProvider>
      <AllLocations />
    </StoreProvider>
  );
}

export default App;
