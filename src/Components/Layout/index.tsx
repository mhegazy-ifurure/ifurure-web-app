import Footer from "../Footer";
import { Navbar } from "../Navbar";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
// import StaticHome from "../StaticHome";
import Page from "../Page";
import Loading from "../Loading";
import { useApi } from "../../utils/apiContext";
import { useTranslation } from "react-i18next";
import {
  Page as PageType,
  Post,
  Project,
  Service,
} from "../../utils/payload-types";

const Layout = () => {
  const {
    headerLoading,
    projectsLoading,
    postsLoading,
    servicesLoading,
    pageLoading,
  } = useApi();
  const { t: tPages } = useTranslation("pages");
  const pages: PageType[] = tPages("data", { returnObjects: true });

  const { t: tService } = useTranslation("services");
  const services: Service[] = tService("data", { returnObjects: true });
  const { t: tPosts } = useTranslation("posts");
  const posts: Post[] = tPosts("data", { returnObjects: true });
  const { t: tProjects } = useTranslation("projects");
  const projects: Project[] = tProjects("data", { returnObjects: true });

  console.log({ pages, posts, services, projects });
  console.log({
    headerLoading,
    projectsLoading,
    postsLoading,
    servicesLoading,
    pageLoading,
  });

  if (
    headerLoading ||
    projectsLoading ||
    postsLoading ||
    servicesLoading ||
    pageLoading
  ) {
    console.log('loading');
    
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
        {pages && pages.length > 0 && (
          <>
            <Routes>
              {pages.map((page, i) => {
                return (
                  <Route
                    key={i}
                    path={`/${page.slug}`}
                    Component={() => <Page page={page} />}
                  />
                );
              })}
              {posts && posts.length > 0 && (
                <>
                  {posts.map((post, i) => {
                    return (
                      <Route
                        key={i}
                        path={`/posts/${post.slug}`}
                        Component={() => (
                          <Page
                            page={{ hero: post.hero, layout: post.layout }}
                          />
                        )}
                      />
                    );
                  })}
                </>
              )}

              {/* {services && services.length > 0 && (
                <>
                  {services.map((service, i) => {
                    return (
                      <Route
                        key={i}
                        path={`/services/${service.slug}`}
                        Component={() => (
                          <Page
                            page={{
                              hero: service.hero,
                              layout: service.layout,
                            }}
                          />
                        )}
                      />
                    );
                  })}
                </>
              )} */}

              {projects && projects.length && (
                <>
                  {projects.map((project, i) => {
                    return (
                      <Route
                        key={i}
                        path={`/projects/${project.slug}`}
                        Component={() => (
                          <Page
                            page={{
                              hero: project.hero,
                              layout: project.layout,
                            }}
                          />
                        )}
                      />
                    );
                  })}
                </>
              )}
            </Routes>
          </>
        )}

        {/* <StaticHome /> */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
