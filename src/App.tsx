import { I18nextProvider } from "react-i18next";
import i18next from "./utils/i18n";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Components/Layout/index";
// import "./_css/app.scss";
// import { Suspense } from "react";

function App() {


  
  const [docDir, setDocDir] = useState(i18next.dir());
  useEffect(() => {
    setDocDir(i18next.dir());
    document.dir = docDir;
  }, [docDir]);

  console.log(i18next.language);
  
  return (
    <>
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                refetchOnWindowFocus: true,
                staleTime: 50,
                cacheTime: 50000,
                
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
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  );
}

export default App;
