import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home/HomePage";
import { SWRConfig } from "swr";
import axios from "axios";
import { Suspense } from "react";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <SWRConfig
          value={{
            suspense: true,
            refreshInterval: 1000,
            revalidateOnFocus: false,
            errorRetryInterval: 5000,
            fetcher: (args) => axios.get(args).then((res) => res.data),
          }}
        >
          <HomePage />
        </SWRConfig>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
