import Footer from "../Footer";
import { Navbar } from "../Navbar";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
// import StaticHome from "../StaticHome";
import Page from "../Page";
import Loading from "../Loading";
import { useApi } from "../../utils/apiContext";
import { useTranslation } from "react-i18next";
import { Page as PageType } from "../../utils/payload-types";
import CollectionPage from "../CollectionPage";

const Layout = () => {
  const {
    header: headerQuery,
    footer: footerQuery,
    pages: pagesQuery,
  } = useApi();

  const { t: tPages } = useTranslation("pages");
  const pages: PageType[] = tPages("data", { returnObjects: true });

  if (
    headerQuery.en.isLoading ||
    headerQuery.ar.isLoading ||
    footerQuery.en.isLoading ||
    footerQuery.ar.isLoading ||
    pagesQuery.en.isLoading ||
    pagesQuery.ar.isLoading
  ) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          lang="en"
          content="Interactive Future | Leading VR & AR technologies developer in  
Saudi Arabia"
        />
        <meta
          name="description"
          lang="ar"
          content="شركة المستقبل التفاعلي | رائدة في تطوير تقنيات الواقع الافتراضي والواقع المعزز في المملكة العربية السعودية "
        />
        <meta
          name="description"
          lang="en"
          content="Interactive Future, Provides the maximum benefit of virtual 
reality, augmented reality and emerging technologies in Saudi 
Arabia, providing innovative solutions in - education, 
entertainment, health care & more, in Saudi Arabia."
        />
        <meta
          name="description"
          lang="ar"
          content="ركة المستقبل التفاعلي تقدم اقصى استفاده من تقنيات, الواقع الافتراضي والواقع المعزز و التقنيات الناشئه ,و توفر حلولا مبتكرة في مجلاتF&+G5ME3,8CBHM*;GB9(HM:HM¢HML8CBM£87JG5M?­M=HKHM
الافتراضي والواقع المعزز و التقنيات الناشئه ,و توفر حلولا مبتكرة في مجلات التعليم,  الترفيه,  الرعاية الصحية و غيرها من المجالات في المملكه العربيهD@MEIHFBHM#2-(HM=HK8JHM?87JGBHM)M­MF@K5MB;£MDK3$ME@MAF£?M
التعليم,  الترفيه,  الرعاية الصحية و غيرها من المجالات في المملكه العربيه السعوديةB-ª73­7@FBHMM­FHMM,HM+487+MMF7M8£HM(M?D8@$3((HMEF-HM/7M
السعودية.9-4LK+{"
        />
      </Helmet>

      <Navbar />
      <main>
        <Routes>
          {pages && pages.length > 0 && (
            <>
              {pages.map((page, i) => {
                return (
                  <Route
                    key={i}
                    path={`/${page.slug}`}
                    Component={() => <Page page={page} />}
                  />
                );
              })}
            </>
          )}
           <Route
                    
                    path={`/:collection/:collectionSlug`}
                    Component={() => <CollectionPage/>}
                  />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
