/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import i18next from "i18next";
import { useQuery } from "react-query";

export const useApi = () => {
  const { isLoading: headerLoading } = useHeader();
  const { isLoading: projectsLoading } = useProjects();
  const { isLoading: postsLoading } = usePosts();
  const { isLoading: servicesLoading } = useServices();
  const { isLoading: pageLoading } = usePages();

  return { headerLoading ,projectsLoading,postsLoading, servicesLoading,pageLoading};
};

const useHeader = () => {
  const {
    data: en,
    isError,
    isLoading,
  } = useQuery(`header-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/globals/header`, {
      params: {
        locale: "en",
        depth: 5,
      },
    });
  });

  const { data: ar } = useQuery(`header-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/globals/header`, {
      params: {
        locale: "ar",
        depth: 5,
      },
    });
  });

  i18next.addResource("en", "header", "data", en?.data.navItems);
  i18next.addResource("ar", "header", "data", ar?.data.navItems);

  // console.log(i18next.t("data"));

  return { isLoading, isError };
};

const useServices = () => {
  const {
    data: en,
    isError,
    isLoading,
  } = useQuery(`services-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/services`, {
      params: {
        locale: "en",
        depth: 25,
      },
    });
  });

  const { data: ar } = useQuery(`services-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/services`, {
      params: {
        locale: "ar",
        depth: 25,
      },
    });
  });
  console.log({ ar, en }, isError, isLoading, "services");

  i18next.addResource("en", "services", "data", en?.data.docs);
  i18next.addResource("ar", "services", "data", ar?.data.docs);

  return { isLoading, isError };
};

const usePosts = () => {
  const {
    data: en,
    isError,
    isLoading,
  } = useQuery(`posts-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/posts`, {
      params: {
        locale: "en",
        depth: 25,
      },
    });
  });

  const { data: ar } = useQuery(`posts-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/posts`, {
      params: {
        locale: "ar",
        depth: 25,
      },
    });
  });

  i18next.addResource("en", "posts", "data", en?.data.docs);
  i18next.addResource("ar", "posts", "data", ar?.data.docs);

  return { isLoading, isError };
};

const useProjects = () => {
  const {
    data: en,
    isError,
    isLoading,
  } = useQuery(`projects-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/projects`, {
      params: {
        locale: "en",
        depth: 25,
      },
    });
  });

  const { data: ar } = useQuery(`projects-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/projects`, {
      params: {
        locale: "ar",
        depth: 25,
      },
    });
  });
  console.log({ ar, en }, isError, isLoading);

  i18next.addResource("en", "projects", "data", en?.data.docs);
  i18next.addResource("ar", "projects", "data", ar?.data.docs);

  return { isLoading, isError };
};

const usePages = () => {
  const {
    data: en,
    isError,
    isLoading,
  } = useQuery(`pages-en`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/pages`, {
      params: {
        locale: "en",
        depth: 5,
      },
    });
  });

  const { data: ar } = useQuery(`pages-ar`, () => {
    return axios.get(`${import.meta.env.REACT_APP_API_URL}/pages`, {
      params: {
        locale: "ar",
        depth: 5,
      },
    });
  });

  i18next.addResource("en", "pages", "data", en?.data.docs);
  i18next.addResource("ar", "pages", "data", ar?.data.docs);

  return { isLoading, isError };
};
