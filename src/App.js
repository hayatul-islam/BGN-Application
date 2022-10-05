import { useState } from "react";
import Loading from "./components/shared/loading/Loading";
import TheLayout from "./pages/TheLayout";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 1400);

  return <>{isLoading ? <TheLayout /> : <Loading />}</>;
}

export default App;
