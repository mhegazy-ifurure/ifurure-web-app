import { I18nextProvider } from "react-i18next";
import Layout from "./Components/Layout";
import i18next from "./utils/i18n";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./_css/app.scss";

// import { Suspense } from "react";

function App() {
  const [docDir, setDocDir] = useState(i18next.dir());
  useEffect(() => {
    setDocDir(i18next.dir());
    document.dir = docDir;
  }, [docDir]);

  return (
    <>
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                refetchOnWindowFocus: false,
                staleTime: 1000,
                cacheTime: 60000,
                retry: 3,
                // maxConcurrentQueries: 20,
              },
            },
          })
        }
      >
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </I18nextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
